import {
  SET_MAGAZINE_PAGE_TEXT_ERROR,
  GET_MAGAZINE_PAGE_TEXT_DATA,
  SET_MAGAZINE_PAGE_TEXT_DATA,
  SET_MAGAZINE_CATEGORIES_ERROR,
  GET_MAGAZINE_CATEGORIES_DATA,
  SET_MAGAZINE_CATEGORIES_DATA,
  SET_MAGAZINE_CATEGORY_INDEX,
  SET_MAGAZINE_ARTICLES_ERROR,
  GET_MAGAZINE_ARTICLES_DATA,
  SET_MAGAZINE_ARTICLES_DATA,
  SET_MAGAZINE_BLOGS_ERROR,
  GET_MAGAZINE_BLOGS_DATA,
  SET_MAGAZINE_BLOGS_DATA,
  GET_MAGAZINE_SINGLE_ARTICLE_DATA,
  SET_MAGAZINE_SINGLE_ARTICLE_ERROR,
  SET_MAGAZINE_SINGLE_ARTICLE_DATA,
  GET_MAGAZINE_SINGLE_BLOG_DATA,
  SET_MAGAZINE_SINGLE_BLOG_ERROR,
  SET_MAGAZINE_SINGLE_BLOG_DATA,
} from "../action-types/magazine";
import axios from "axios";

export const getMagazinePageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_PAGE_TEXT_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-one-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_MAGAZINE_PAGE_TEXT_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_PAGE_TEXT_ERROR }));
  };
};

export const getMagazineCategories = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_CATEGORIES_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-categories?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        dispatch({
          type: SET_MAGAZINE_CATEGORIES_DATA,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_CATEGORIES_ERROR }));
  };
};

export const setMagazineCategoryIndex = (categoryId) => {
  return (dispatch) => {
    dispatch({
      type: SET_MAGAZINE_CATEGORY_INDEX,
      payload: categoryId,
    });
  };
};

export const getMagazineArticles = (lang, categoryId = 0) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_ARTICLES_DATA });

    if (categoryId === 0) {
      return axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/magazine-articles?_locale=${lang}&_sort=id:ASC`
        )
        .then((res) => {
          const { data } = res;
          dispatch({
            type: SET_MAGAZINE_ARTICLES_DATA,
            payload: data,
          });

          return data;
        })
        .catch((err) => dispatch({ type: SET_MAGAZINE_ARTICLES_ERROR }));
    }
    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-categories/${categoryId}?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        const { magazine_articles } = data;
        dispatch({
          type: SET_MAGAZINE_ARTICLES_DATA,
          payload: magazine_articles,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_ARTICLES_ERROR }));
  };
};

export const getMagazineBlogs = (lang, categoryId = 0) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_BLOGS_DATA });

    if (categoryId === 0) {
      return axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/magazine-blogs?_locale=${lang}&_sort=order:ASC`
        )
        .then((res) => {
          const { data } = res;
          dispatch({
            type: SET_MAGAZINE_BLOGS_DATA,
            payload: data,
          });

          return data;
        })
        .catch((err) => dispatch({ type: SET_MAGAZINE_BLOGS_ERROR }));
    }
    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-categories/${categoryId}?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;
        const { magazine_blogs } = data;

        dispatch({
          type: SET_MAGAZINE_BLOGS_DATA,
          payload: magazine_blogs,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_BLOGS_ERROR }));
  };
};

export const getMagazineArticleById = (lang, id) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_SINGLE_ARTICLE_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-articles/${id}?_locale=${lang}`
      )
      .then((res) => {
        const article_data = res?.data;
        const { magazine_products } = article_data;
        if (!magazine_products) {
          dispatch({ type: SET_MAGAZINE_SINGLE_ARTICLE_ERROR });
          return;
        }
        magazine_products?.map((product, i) => {
          axios
            .get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&id=${product?.product_id}&with=variations,itemImages&lang=${lang}`
            )
            .then(async (res) => {
              const { data } = res;
              const images = [];
              const variants_of_a_products = [];
              const {
                id,
                manufacturerId,
                createdAt,
                updatedAt,
                texts,
                variations,
                itemImages,
              } = data;
              const {
                name1,
                shortDescription,
                metaDescription,
                description,
                technicalData,
                keywords,
              } = texts[0];
              let brand = "No Brand";
              await itemImages.map((image, j) => {
                const formats = [];
                const {
                  cleanImageName,
                  fileType,
                  height,
                  width,
                  size,
                  url,
                  insert,
                  lastUpdate,
                  urlMiddle,
                  urlPreview,
                } = image;
                if (url) {
                  formats.push({
                    large: {
                      url,
                      mime: fileType,
                    },
                  });
                }
                if (urlMiddle) {
                  formats.push({
                    medium: {
                      url: urlMiddle,
                      mime: fileType,
                    },
                  });
                }
                if (urlPreview) {
                  formats.push({
                    thumbnail: {
                      url: urlPreview,
                      mime: fileType,
                    },
                  });
                }
                images.push({
                  name: cleanImageName,
                  mime: fileType,
                  height,
                  width,
                  size,
                  url,
                  formats,
                  created_at: insert,
                  updated_at: lastUpdate,
                });
              });
              await variations.map((variation, v) => {
                const { isMain, purchasePrice, availability, number } =
                  variation;
                //if (purchasePrice > price) price = purchasePrice;
                variants_of_a_products.push({
                  main: v === 0 ? true : false,
                  images: images.length > 0 ? [images[0]] : [],
                  price: purchasePrice,
                  quantity: availability,
                  number,
                });
              });
              await variants_of_a_products.map((vop, v) => {
                if (v === 0) {
                  vop.main = true;
                } else {
                  vop.main = false;
                }
                //vop.price = price;
              });
              product.name = name1;
              product.brand = brand;
              product.images = images;
              product.variants_of_a_products = variants_of_a_products;
              /* payload: {
                  id,
                  name: name1,
                  brand,
                  images,
                  description,
                  technicalData,
                  variants_of_a_products,
                  New_Date_Limit: createdAt,
                  created_at: createdAt,
                  updated_at: updatedAt,
                  keywords,
                } */
              if (i === magazine_products?.length - 1) {
                dispatch({
                  type: SET_MAGAZINE_SINGLE_ARTICLE_DATA,
                  payload: article_data,
                });
                return article_data;
              }
            })
            .catch((err) =>
              dispatch({
                type: SET_MAGAZINE_SINGLE_ARTICLE_ERROR,
                payload: err,
              })
            );
        });
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_SINGLE_ARTICLE_ERROR }));
  };
};

export const getMagazineBlogById = (lang, id) => {
  return (dispatch) => {
    dispatch({ type: GET_MAGAZINE_SINGLE_BLOG_DATA });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/magazine-blogs/${id}?_locale=${lang}`
      )
      .then((res) => {
        const blogData = res?.data;
        const { magazine_blog_products } = blogData;
        magazine_blog_products?.map((product, i) => {
          axios
            .get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&id=${product?.product_id}&with=variations,itemImages&lang=${lang}`
            )
            .then(async (res) => {
              const { data } = res;
              const images = [];
              const variants_of_a_products = [];
              const {
                id,
                manufacturerId,
                createdAt,
                updatedAt,
                texts,
                variations,
                itemImages,
              } = data;
              const {
                name1,
                shortDescription,
                metaDescription,
                description,
                technicalData,
                keywords,
              } = texts[0];
              let brand = "No Brand";
              await itemImages.map((image, j) => {
                const formats = [];
                const {
                  cleanImageName,
                  fileType,
                  height,
                  width,
                  size,
                  url,
                  insert,
                  lastUpdate,
                  urlMiddle,
                  urlPreview,
                } = image;
                if (url) {
                  formats.push({
                    large: {
                      url,
                      mime: fileType,
                    },
                  });
                }
                if (urlMiddle) {
                  formats.push({
                    medium: {
                      url: urlMiddle,
                      mime: fileType,
                    },
                  });
                }
                if (urlPreview) {
                  formats.push({
                    thumbnail: {
                      url: urlPreview,
                      mime: fileType,
                    },
                  });
                }
                images.push({
                  name: cleanImageName,
                  mime: fileType,
                  height,
                  width,
                  size,
                  url,
                  formats,
                  created_at: insert,
                  updated_at: lastUpdate,
                });
              });
              await variations.map((variation, v) => {
                const { isMain, purchasePrice, availability, number } =
                  variation;
                //if (purchasePrice > price) price = purchasePrice;
                variants_of_a_products.push({
                  main: v === 0 ? true : false,
                  images: images.length > 0 ? [images[0]] : [],
                  price: purchasePrice,
                  quantity: availability,
                  number,
                });
              });
              await variants_of_a_products.map((vop, v) => {
                if (v === 0) {
                  vop.main = true;
                } else {
                  vop.main = false;
                }
                //vop.price = price;
              });
              product.name = name1;
              product.brand = brand;
              product.images = images;
              product.variants_of_a_products = variants_of_a_products;
              /* payload: {
                  id,
                  name: name1,
                  brand,
                  images,
                  description,
                  technicalData,
                  variants_of_a_products,
                  New_Date_Limit: createdAt,
                  created_at: createdAt,
                  updated_at: updatedAt,
                  keywords,
                } */
              if (i === magazine_blog_products?.length - 1) {
                dispatch({
                  type: SET_MAGAZINE_SINGLE_BLOG_DATA,
                  payload: blogData,
                });

                return blogData;
              }
            })
            .catch((err) =>
              dispatch({
                type: SET_MAGAZINE_SINGLE_BLOG_ERROR,
                payload: err,
              })
            );
        });
      })
      .catch((err) => dispatch({ type: SET_MAGAZINE_SINGLE_BLOG_ERROR }));
  };
};
