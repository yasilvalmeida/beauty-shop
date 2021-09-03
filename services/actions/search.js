import axios from "axios";
import {
  GET_SEARCH_PAGE_TEXT_DATA,
  SET_SEARCH_PAGE_TEXT_DATA,
  SET_SEARCH_PAGE_TEXT_ERROR,
  GET_SEARCH_DATA,
  SET_SEARCH_DATA,
  SET_SEARCH_ERROR,
} from "../action-types/search";

export const getSearchPageText = (lang) => {
  return (dispatch) => {
    dispatch({ type: GET_SEARCH_PAGE_TEXT_DATA });
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/search-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_SEARCH_PAGE_TEXT_DATA,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({ type: SET_SEARCH_PAGE_TEXT_ERROR, payload: err })
      );
  };
};

export const searchProducts = (lang, word) => {
  return (dispatch) => {
    dispatch({ type: GET_SEARCH_DATA });
    axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchItem&page=1&itemsPerPage=3000&with=variations,itemImages&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { totalsCount } = data;
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
              main: v === 0 || isMain ? true : false,
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
          if (
            name1?.toLowerCase().includes(word) ||
            description?.toLowerCase().includes(word) ||
            technicalData?.toLowerCase().includes(word) ||
            keywords?.toLowerCase().includes(word)
          ) {
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
              type: SET_SEARCH_DATA,
              payload: products,
            });
          }
        });
      })
      .catch((err) => dispatch({ type: SET_SEARCH_ERROR, payload: err }));
  };
};
