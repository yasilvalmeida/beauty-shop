import axios from "axios";
import {
    SET_SHOP_PRODUCTS,
    SET_ERROR,
    SET_LOADED,
    GET_SHOP_PRODUCTS,
    SET_PRODUCTS_COUNT,
    SORT_SHOP_PRODUCTS
} from "../action-types/shop";
import { backendLogin } from "../actions/plenty_market_auth";

export const getShopProducts = (currentPage, maxPerPage) => {
    return (dispatch) => {
        dispatch(backendLogin());
        dispatch({ type: GET_SHOP_PRODUCTS });
        dispatch({ type: SET_LOADED });
        const plentyMarketAuthData = JSON.parse(
          localStorage.getItem("plentyMarketAuthData")
        );
        const { accessToken, access_token } = plentyMarketAuthData;
        axios
          .get(
            `${process.env.PLENTY_MARKET_API_URL}/items?page=${currentPage}&itemsPerPage=${maxPerPage}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken ? accessToken : access_token}`,
              },
            }
          )
          .then(async (res) => {
            const { data } = res;
            const { totalsCount } = data;
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
                New_Date_Limit: createdAt,
                created_at: createdAt,
                updated_at: updatedAt,
                keywords,
              });
              if (i === entries.length - 1) {
                dispatch({
                  type: SET_SHOP_PRODUCTS,
                  payload: products,
                });
                
                dispatch({
                  type: SET_PRODUCTS_COUNT,
                  payload: totalsCount,
                });
              }
            });
          })
          .catch((err) => dispatch({ type: SET_ERROR, payload: err }));
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