import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    SET_PRODUCTS_TWO,
    SET_ERROR,
    SWITCH_TO_FAVOURITE,
    GET_FAVOURITES_PRODUCTS,
    SET_FAVOURITES_PRODUCTS,
    GET_PRODUCTS_WITH_LEFT_TEXT,
    SET_PRODUCTS_WITH_LEFT_TEXT,
    GET_PRODUCTS_WITH_FILTER,
    GET_EIGHT_PRODUCTS_WITH_FILTER,
    GET_SINGLE_PRODUCT_DATA,
    SET_PRODUCT_SINGLE_LOADED, 
    GET_PRODUCTS_WITH_FILTER_TWO, 
    SWITCH_TO_FAVOURITE_TWO,
} from "../action-types/products";
import { backendLogin } from "../actions/plenty_market_auth";

import axios from "axios";

export const getProducts = () => {
    return (dispatch) => {
        dispatch(backendLogin())
        //dispatch({ type: PLENTY_MARKET_LOGIN });
        dispatch({ type: GET_PRODUCTS });
        const plentyMarketAuthData = JSON.parse(
          localStorage.getItem("plentyMarketAuthData")
        );
        const { accessToken } = plentyMarketAuthData;
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}/items?page=1&itemsPerPage=3`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const products = [];
            await entries.map(async (product, i) => {
              const images = [];
              const variants_of_a_products = [];
              const { id, manufacturerId, createdAt, updatedAt, texts } =
                product;
              const {
                name1,
                shortDescription,
                metaDescription,
                description,
                technicalData,
                keywords,
              } = texts[0];
              const variationsFetchData = await axios.get(
                `${process.env.PLENTY_MARKET_API_URL}/items/${id}/variations`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );
              const imagesFetchData = await axios.get(
                `${process.env.PLENTY_MARKET_API_URL}/items/${id}/images`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );
              const imagesData = imagesFetchData?.data;
              await imagesData.map((image, j) => {
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
              const variationsData = variationsFetchData?.data?.entries;
              await variationsData.map((variation, v) => {
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
                manufacturerId,
                images,
                variants_of_a_products,
                created_at: createdAt,
                updated_at: updatedAt,
                keywords,
              });
              if (i === entries.length - 1) {
                  dispatch({
                    type: SET_PRODUCTS,
                    payload: products,
                  });
              }
            });
          })
          .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    };
};
export const getProductsTwo = () => {
    return (dispatch) => {
        dispatch(backendLogin());
        //dispatch({ type: PLENTY_MARKET_LOGIN });
        dispatch({ type: GET_PRODUCTS });
        const plentyMarketAuthData = JSON.parse(
          localStorage.getItem("plentyMarketAuthData")
        );
        const { accessToken } = plentyMarketAuthData;
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}/items?page=3&itemsPerPage=3`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(async (res) => {
            const { data } = res;
            const { entries } = data;
            const products = [];
            await entries.map(async (product, i) => {
              const images = [];
              const variants_of_a_products = [];
              const { id, manufacturerId, createdAt, updatedAt, texts } =
                product;
              const {
                name1,
                shortDescription,
                metaDescription,
                description,
                technicalData,
                keywords,
              } = texts[0];
              const variationsFetchData = await axios.get(
                `${process.env.PLENTY_MARKET_API_URL}/items/${id}/variations`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );
              const imagesFetchData = await axios.get(
                `${process.env.PLENTY_MARKET_API_URL}/items/${id}/images`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );
              const imagesData = imagesFetchData?.data;
              await imagesData.map((image, j) => {
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
              const variationsData = variationsFetchData?.data?.entries;
              await variationsData.map((variation, v) => {
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
                manufacturerId,
                images,
                variants_of_a_products,
                created_at: createdAt,
                updated_at: updatedAt,
                keywords,
              });
              if (i === entries.length - 1) {
                dispatch({
                  type: SET_PRODUCTS_TWO,
                  payload: products,
                });
              }
            });
          })
          .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
        
        /* 
        dispatch({type: GET_PRODUCTS});
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/findByLimit/3`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: SET_PRODUCTS_TWO,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err})); */
    };
};
export const addToWishList = (product, variantId, array) => {
    return (dispatch) => {
        return axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/AddFavoriteProductsTheUser`,
                {product: product, variant_id: variantId},
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    },
                }
            )
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: SWITCH_TO_FAVOURITE,
                    payload: {
                        id: product,
                        variant_id: variantId,
                        data:data,
                        array:array || ""
                    },
                });

                return product;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const addToWishListTwo = (product, variantId,array) => {
    return (dispatch) => {
        return axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL}/AddFavoriteProductsTheUser`,
                {product: product, variant_id: variantId},
                {
                    headers: {
                        Authorization: `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`,
                    },
                }
            )
            .then((res) => {
                const {data} = res;
                console.log(array)
                dispatch({
                    type: SWITCH_TO_FAVOURITE_TWO,
                    payload: {
                        id: product,
                        variant_id: variantId,
                        data:data,
                        array:array
                    },
                });

                return product;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getUserWishlist = () => {
    return (dispatch) => {
        dispatch({type: GET_FAVOURITES_PRODUCTS});
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/theUsersAllFavoriteProducts`, {
                headers: {
                    Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                    }`,
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({type: SET_FAVOURITES_PRODUCTS, payload: data});
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getProductsWithLeftText = () => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCTS_WITH_LEFT_TEXT});
        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/product-with-left-texts`
                // { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userData') || '{}').jwt || ''}` } }
            )
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: SET_PRODUCTS_WITH_LEFT_TEXT,
                    payload: []//data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getProductsWithFilter = (position) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCTS_WITH_LEFT_TEXT});
        return axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/four-products/${position}`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: GET_PRODUCTS_WITH_FILTER,
                    payload: data,
                });

                return data;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};
export const getProductsWithFilterSecond = (position) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCTS_WITH_LEFT_TEXT});
        return axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/eight-products/${position}`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: GET_PRODUCTS_WITH_FILTER_TWO,
                    payload: data,
                });
                return data;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};
export const getEightProductsWithFilter = (position) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCTS_WITH_LEFT_TEXT});
        return axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/eight-products/${position}`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: GET_EIGHT_PRODUCTS_WITH_FILTER,
                    payload: data,
                });
                return data;
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    };
};

export const getSingleProduct = (id) => {
    return (dispatch) => {
      dispatch(backendLogin());
      dispatch({ type: SET_PRODUCT_SINGLE_LOADED });
      const plentyMarketAuthData = JSON.parse(
        localStorage.getItem("plentyMarketAuthData")
      );
      const { accessToken } = plentyMarketAuthData;
      axios
        .get(
          `${process.env.PLENTY_MARKET_API_URL}/items/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(async (res) => {
          const { data } = res;
          const images = [];
          const variants_of_a_products = [];
          const { id, manufacturerId, createdAt, updatedAt, texts } = data;
          const {
            name1,
            shortDescription,
            metaDescription,
            description,
            technicalData,
            keywords,
          } = texts[0];
          const variationsFetchData = await axios.get(
            `${process.env.PLENTY_MARKET_API_URL}/items/${id}/variations`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const imagesFetchData = await axios.get(
            `${process.env.PLENTY_MARKET_API_URL}/items/${id}/images`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const imagesData = imagesFetchData?.data;
          await imagesData.map((image, j) => {
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
          const variationsData = variationsFetchData?.data?.entries;
          await variationsData.map((variation, v) => {
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
          dispatch({
            type: GET_SINGLE_PRODUCT_DATA,
            payload: {
              id,
              name: name1,
              manufacturerId,
              images,
              variants_of_a_products,
              created_at: createdAt,
              updated_at: updatedAt,
              keywords,
            },
          });
        })
        .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    };
    /* return (dispatch) => {
        dispatch({type: SET_PRODUCT_SINGLE_LOADED});
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem("userData") || "{}")
                        .jwt
                        ? `Bearer ${
                            JSON.parse(localStorage.getItem("userData") || "{}").jwt || ""
                        }`
                        : "",
                },
            })
            .then((res) => {
                const {data} = res;
                dispatch({
                    type: GET_SINGLE_PRODUCT_DATA,
                    payload: data,
                });
            })
            .catch((err) => dispatch({type: SET_ERROR, payload: err}));
    }; */
};

// export const setSingleProductSelected = (id) => {
//     return (dispatch) => {
//         dispatch({
//             type: SET_SINGLE_PRODUCT_SELECTED,
//             payload: id
//         })
//     }
// }
