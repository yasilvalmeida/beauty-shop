import axios from "axios";
import {
  GET_BRANDS_PRODUCTS_FOUR,
  GET_BRANDS_PRODUCTS_ONE,
  GET_BRANDS_PRODUCTS_THREE,
  GET_BRANDS_PRODUCTS_TWO,
  SET_BRANDS_PRODUCTS_FOUR,
  SET_BRANDS_PRODUCTS_ONE,
  SET_BRANDS_PRODUCTS_THREE,
  SET_BRANDS_PRODUCTS_TWO,
  GET_BRANDS_PRODUCTS_FIVE,
  SET_BRANDS_PRODUCTS_FIVE,
  SET_ERROR,
  GET_BRAND_PAGE_DATA,
  SET_BRAND_PAGE_DATA,
} from "../action-types/brands";

export const getBrandsProductsOne = (brandId, lang) => {
  return (dispatch) => {
    dispatch({ type: GET_BRANDS_PRODUCTS_ONE });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=1&itemsPerPage=3&manufacturerId=${brandId}&with=variations,itemImages&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries.map(async (product, i) => {
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
          } = product;
          const {
            name1,
            shortDescription,
            metaDescription,
            description,
            technicalData,
            keywords,
          } =
            texts?.length > 0
              ? texts[0]
              : {
                  name1: "No Name",
                  shortDescription: "",
                  metaDescription: "",
                  description: "",
                  technicalData: "",
                  keywords: "",
                };
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
            const { isMain, purchasePrice, availability } = variation;
            //if (purchasePrice > price) price = purchasePrice;
            variants_of_a_products.push({
              main: v === 0 ? true : false,
              images: images.length > 0 ? [images[0]] : [],
              price: purchasePrice,
              quantity: availability,
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
          products.push({
            id,
            name: name1,
            brand,
            brandId: manufacturerId !== 0 ? manufacturerId : 0,
            images,
            variants_of_a_products,
            New_Date_Limit: createdAt,
            created_at: createdAt,
            updated_at: updatedAt,
            keywords,
          });
          if (i === entries.length - 1) {
            dispatch({
              type: SET_BRANDS_PRODUCTS_ONE,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getBrandsProductsTwo = (lang, brandId) => {
  return (dispatch) => {
    dispatch({ type: GET_BRANDS_PRODUCTS_TWO });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=2&itemsPerPage=3&manufacturerId=${brandId}&with=variations,itemImages&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries.map(async (product, i) => {
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
          } = product;
          const {
            name1,
            shortDescription,
            metaDescription,
            description,
            technicalData,
            keywords,
          } =
            texts?.length > 0
              ? texts[0]
              : {
                  name1: "No Name",
                  shortDescription: "",
                  metaDescription: "",
                  description: "",
                  technicalData: "",
                  keywords: "",
                };
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
            const { isMain, purchasePrice, availability } = variation;
            //if (purchasePrice > price) price = purchasePrice;
            variants_of_a_products.push({
              main: v === 0 ? true : false,
              images: images.length > 0 ? [images[0]] : [],
              price: purchasePrice,
              quantity: availability,
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
          products.push({
            id,
            name: name1,
            brand,
            brandId: manufacturerId !== 0 ? manufacturerId : 0,
            images,
            variants_of_a_products,
            New_Date_Limit: createdAt,
            created_at: createdAt,
            updated_at: updatedAt,
            keywords,
          });
          if (i === entries.length - 1) {
            dispatch({
              type: SET_BRANDS_PRODUCTS_TWO,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getBrandsProductsThree = (lang, brandId) => {
  return (dispatch) => {
    dispatch({ type: GET_BRANDS_PRODUCTS_THREE });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=3&itemsPerPage=3&manufacturerId=${brandId}&with=variations,itemImages&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries.map(async (product, i) => {
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
          } = product;
          const {
            name1,
            shortDescription,
            metaDescription,
            description,
            technicalData,
            keywords,
          } =
            texts?.length > 0
              ? texts[0]
              : {
                  name1: "No Name",
                  shortDescription: "",
                  metaDescription: "",
                  description: "",
                  technicalData: "",
                  keywords: "",
                };
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
            const { isMain, purchasePrice, availability } = variation;
            //if (purchasePrice > price) price = purchasePrice;
            variants_of_a_products.push({
              main: v === 0 ? true : false,
              images: images.length > 0 ? [images[0]] : [],
              price: purchasePrice,
              quantity: availability,
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
          products.push({
            id,
            name: name1,
            brand,
            brandId: manufacturerId !== 0 ? manufacturerId : 0,
            images,
            variants_of_a_products,
            New_Date_Limit: createdAt,
            created_at: createdAt,
            updated_at: updatedAt,
            keywords,
          });
          if (i === entries.length - 1) {
            dispatch({
              type: SET_BRANDS_PRODUCTS_THREE,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getBrandsProductsFour = (lang, brandId) => {
  return (dispatch) => {
    dispatch({ type: GET_BRANDS_PRODUCTS_FOUR });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=4&itemsPerPage=3&manufacturerId=${brandId}&with=variations,itemImages&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries.map(async (product, i) => {
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
          } = product;
          const {
            name1,
            shortDescription,
            metaDescription,
            description,
            technicalData,
            keywords,
          } =
            texts?.length > 0
              ? texts[0]
              : {
                  name1: "No Name",
                  shortDescription: "",
                  metaDescription: "",
                  description: "",
                  technicalData: "",
                  keywords: "",
                };
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
            const { isMain, purchasePrice, availability } = variation;
            //if (purchasePrice > price) price = purchasePrice;
            variants_of_a_products.push({
              main: v === 0 ? true : false,
              images: images.length > 0 ? [images[0]] : [],
              price: purchasePrice,
              quantity: availability,
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
          products.push({
            id,
            name: name1,
            brand,
            brandId: manufacturerId !== 0 ? manufacturerId : 0,
            images,
            variants_of_a_products,
            New_Date_Limit: createdAt,
            created_at: createdAt,
            updated_at: updatedAt,
            keywords,
          });
          if (i === entries.length - 1) {
            dispatch({
              type: SET_BRANDS_PRODUCTS_FOUR,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getBrandsProductsFive = (lang, brandId) => {
  return (dispatch) => {
    dispatch({ type: GET_BRANDS_PRODUCTS_FIVE });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=5&itemsPerPage=3&manufacturerId=${brandId}&with=variations,itemImages&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries.map(async (product, i) => {
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
          } = product;
          const {
            name1,
            shortDescription,
            metaDescription,
            description,
            technicalData,
            keywords,
          } =
            texts?.length > 0
              ? texts[0]
              : {
                  name1: "No Name",
                  shortDescription: "",
                  metaDescription: "",
                  description: "",
                  technicalData: "",
                  keywords: "",
                };
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
            const { isMain, purchasePrice, availability } = variation;
            //if (purchasePrice > price) price = purchasePrice;
            variants_of_a_products.push({
              main: v === 0 ? true : false,
              images: images.length > 0 ? [images[0]] : [],
              price: purchasePrice,
              quantity: availability,
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
          products.push({
            id,
            name: name1,
            brand,
            brandId: manufacturerId !== 0 ? manufacturerId : 0,
            images,
            variants_of_a_products,
            New_Date_Limit: createdAt,
            created_at: createdAt,
            updated_at: updatedAt,
            keywords,
          });
          if (i === entries.length - 1) {
            dispatch({
              type: SET_BRANDS_PRODUCTS_FIVE,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getBrandsPageData = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_BRAND_PAGE_DATA });
    const header_title = "bynacht";
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/brand-page-data?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_BRAND_PAGE_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};
