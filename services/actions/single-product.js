import {
  GET_STYLE_DATA,
  SET_STYLE_DATA,
  SET_STYLE_ERROR,
  GET_SINGLE_PRODUCT_DATA,
  SET_SINGLE_PRODUCT_DATA,
  SET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_PAGE_TEXT_DATA,
  SET_SINGLE_PRODUCT_PAGE_TEXT_DATA,
  SET_SINGLE_PRODUCT_PAGE_TEXT_ERROR,
  SET_SINGLE_PRODUCT_VARIANT_ID,
  SET_SINGLE_PRODUCT_SELECTED,
} from "../action-types/single-product";
import axios from "axios";

export const getSytles = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_STYLE_DATA });

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/styles?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_STYLE_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_STYLE_ERROR, payload: err }));
  };
};

export const getSingleProductPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_PRODUCT_PAGE_TEXT_DATA });

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/single-product-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_SINGLE_PRODUCT_PAGE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: SET_SINGLE_PRODUCT_PAGE_TEXT_ERROR, payload: err }));
  };
};

export const getSingleProductVariantId = (id) => {
  return (dispatch) => {
    dispatch({
      type: SET_SINGLE_PRODUCT_VARIANT_ID,
      payload: id,
    });
  };
};

export const getSingleProduct = (id, lang) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_PRODUCT_DATA });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&id=${id}&with=variations,itemImages&lang=${lang}`
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
          type: SET_SINGLE_PRODUCT_DATA,
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
      .catch((err) =>
        dispatch({ type: SET_SINGLE_PRODUCT_ERROR, payload: err })
      );
  };
};

export const getSingleProductSelected = (id) => {
  return (dispatch) => {
    dispatch({
      type: SET_SINGLE_PRODUCT_SELECTED,
      payload: id,
    });
  };
};
