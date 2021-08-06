import {
    GET_PRODUCTS,
    SET_PRODUCTS,
    SET_FIRST_THREE_PRODUCTS,
    SET_SECOND_THREE_PRODUCTS,
    SET_PRODUCTS_BY_CATEGORIES,
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
import axios from "axios";

export const getFirstThreeProducts = () => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=1&itemsPerPage=3&with=variations,itemImages`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries?.map(async (product, i) => {
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
          } = texts[0];
          let brand = "No Brand";
          if (manufacturerId !== 0) {
            const manufactoryData = await axios.get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufactorers&id=${manufacturerId}`
            );
            brand = manufactoryData?.data?.name;
          }
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
              type: SET_FIRST_THREE_PRODUCTS,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};
export const getSecondThreeProducts = () => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=3&itemsPerPage=3&with=variations,itemImages`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const products = [];
        await entries?.map(async (product, i) => {
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
          } = texts[0];
          let brand = "No Brand";
          if (manufacturerId !== 0) {
            const manufactoryData = await axios.get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufactorers&id=${manufacturerId}`
            );
            brand = manufactoryData?.data?.name;
          }
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
              type: SET_SECOND_THREE_PRODUCTS,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getProducts = (currentPage, itemsPerPage) => {
  return (dispatch) => {
      axios
        .get(
          `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=${currentPage}&itemsPerPage=${itemsPerPage}&with=variations,itemImages`
        )
        .then(async (res) => {
          const { data } = res;
          const { entries } = data;
          const products = [];
          await entries?.map(async (product, i) => {
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
            } = texts[0];
            let brand = "No Brand";
            if (manufacturerId !== 0) {
              const manufactoryData = await axios.get(
                `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufactorers&id=${manufacturerId}`
              );
              brand = manufactoryData?.data?.name;
            } 
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
                type: SET_PRODUCTS,
                payload: products,
              });
            }
          });
        })
        .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
  };
};

export const getProductsByCategories = (
  currentPage,
  maxPerPage,
  categories
) => {
  return async (dispatch) => {
    const products_by_category = [];
    await categories?.map(async(category, c) => {
      axios
        .get(
          `${process.env.PLENTY_MARKET_API_URL}?action=fetchVariation&page=${currentPage}&itemsPerPage=${maxPerPage}&categoryId=${category.id}&with=variationCategories,itemImages,item`
        )
        .then(async (res) => {
          const { data } = res;
          const { entries } = data;
          const products = [];
          await entries.map(async (variation, i) => {
            const images = [];
            const variants_of_a_products = [];
            const { isMain, purchasePrice, availability, item, itemImages } =
              variation;
            const { id, manufacturerId, createdAt, updatedAt } = item;
            const itemData = await axios.get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&id=${id}`
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
            } = texts[0];
            let brand = "No Brand";
            if (manufacturerId !== 0) {
              const manufactoryData = await axios.get(
                `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufactorers&id=${manufacturerId}`
              );
              brand = manufactoryData?.data?.name;
            } 
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
              itemData,
            });
            if (i === entries.length - 1) {
              products_by_category[c] = {
                categoryIndex: c,
                categoryId: category.id,
                products,
              };
              if (c === categories.length - 1) {
                dispatch({
                  type: SET_PRODUCTS_BY_CATEGORIES,
                  payload: products_by_category,
                });
              }
            }
          });
        })
        .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    });
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
      .get(`${process.env.NEXT_PUBLIC_API_URL}/product-with-left-texts`)
      .then((res) => {
        const {data} = res;
        dispatch({
          type: SET_PRODUCTS_WITH_LEFT_TEXT,
          payload: data,
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
                    payload: {data, position},
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
      dispatch({ type: SET_PRODUCT_SINGLE_LOADED, payload: id });
      axios
        .get(
          `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&id=${id}&with=variations,itemImages`
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
          if (manufacturerId !== 0) {
            const manufactoryData = await axios.get(
              `${process.env.PLENTY_MARKET_API_URL}?action=fetchManufactorers&id=${manufacturerId}`
            );
            brand = manufactoryData?.data?.name;
          }
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
            const { isMain, purchasePrice, availability, number } = variation;
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
          dispatch({
            type: GET_SINGLE_PRODUCT_DATA,
            payload: {
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
            },
          });
        })
        .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
    };
};

export const setSingleProductSelected = (id) => {
    return (dispatch) => {
        dispatch({
            type: SET_SINGLE_PRODUCT_SELECTED,
            payload: id
        })
    }
}
