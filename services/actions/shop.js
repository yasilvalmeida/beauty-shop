import axios from "axios";
import {
  SET_SHOP_PRODUCTS,
  SET_ERROR,
  SET_LOADED,
  GET_SHOP_PRODUCTS,
  SET_SHOP_PRODUCTS_COUNT,
  SORT_SHOP_PRODUCTS,
} from "../action-types/shop";

export const getShopProducts = (currentPage, maxPerPage, filterType, filterId, lang) => {
    return (dispatch) => {
        dispatch({
          type: SET_LOADED,
          payload: false,
        });
        dispatch({ type: GET_SHOP_PRODUCTS });
        if (filterId === 0) {
          axios
            .get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=${currentPage}&itemsPerPage=${maxPerPage}&with=variations,itemImages&lang=${lang}`
            )
            .then(async (res) => {
              const { data } = res;
              const { totalsCount } = data;
              const { entries } = data;
              const products = [];
              if (entries?.length === 0) {
                dispatch({
                  type: SET_LOADED,
                  payload: true,
                });
              }
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
                } = texts?.length > 0 ? texts[0] : {};
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
                if (texts?.length > 0) {
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
                }
                if (i === entries.length - 1) {
                  dispatch({
                    type: SET_SHOP_PRODUCTS,
                    payload: products,
                  });

                  dispatch({
                    type: SET_SHOP_PRODUCTS_COUNT,
                    payload: totalsCount,
                  });

                  dispatch({ 
                    type: SET_LOADED,
                    payload: true 
                  });
                }
              });
            })
            .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
        } else if (filterType === "MARKEN") {
          axios
            .get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=${currentPage}&itemsPerPage=${maxPerPage}&manufacturerId=${filterId}&with=variations,itemImages&lang=${lang}`
            )
            .then(async (res) => {
              const { data } = res;
              const { totalsCount } = data;
              const { entries } = data;
              const products = [];
              if (entries?.length === 0) {
                dispatch({
                  type: SET_LOADED,
                  payload: true,
                });
              }
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
                } = texts?.length > 0 ? texts[0] : {};
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
                if (texts?.length > 0) {
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
                }
                if (i === entries.length - 1) {
                  dispatch({
                    type: SET_SHOP_PRODUCTS,
                    payload: products,
                  });

                  dispatch({
                    type: SET_SHOP_PRODUCTS_COUNT,
                    payload: totalsCount,
                  });

                  dispatch({
                    type: SET_LOADED,
                    payload: true,
                  });
                }
              });
            })
            .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
        } else if (filterType === "KATEGORIEN") {
          axios
            .get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchVariation&page=${currentPage}&itemsPerPage=${maxPerPage}&categoryId=${filterId}&with=variationCategories,itemImages,item&lang=${lang}`
            )
            .then(async (res) => {
              const { data } = res;
              const { totalsCount } = data;
              const { entries } = data;
              const products = [];
              if (entries?.length === 0) {
                dispatch({
                  type: SET_LOADED,
                  payload: true,
                });
              }
              await entries.map(async (variation, i) => {
                const images = [];
                const variants_of_a_products = [];
                const {
                  isMain,
                  purchasePrice,
                  availability,
                  item,
                  itemImages,
                } = variation;
                const { id, manufacturerId, createdAt, updatedAt } = item;
                const itemData = await axios.get(
                  `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&id=${id}&lang=${lang}`
                );
                const { data } = itemData;
                const { texts } = data;
                const {
                  name1,
                  shortDescription,
                  metaDescription,
                  description,
                  technicalData,
                  keywords,
                } = texts?.length > 0 ? texts[0] : {};
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
                await variants_of_a_products.push({
                  main: isMain,
                  images: images.length > 0 ? [images[0]] : [],
                  price: purchasePrice,
                  quantity: availability,
                });
                await variants_of_a_products.map((vop, v) => {
                  if (v === 0) {
                    vop.main = true;
                  } else {
                    vop.main = false;
                  }
                  //vop.price = price;
                });
                if (texts?.length > 0){
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
                }
                if (i === entries.length - 1) {
                  dispatch({
                    type: SET_SHOP_PRODUCTS,
                    payload: products,
                  });

                  dispatch({
                    type: SET_SHOP_PRODUCTS_COUNT,
                    payload: totalsCount,
                  });

                  dispatch({
                    type: SET_LOADED,
                    payload: true,
                  });
                }
              });
            })
            .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
        }

    };
};

export const sortShopProducts = (data) =>{
    return dispatch => {
        dispatch({
            type:SORT_SHOP_PRODUCTS,
            payload:data
        })
    }
}