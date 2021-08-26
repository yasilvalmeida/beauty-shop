import {
  LOD_NAVBAR,
  SET_NAVBAR,
  GET_HOMEPAGE_SECTIONONE,
  SET_HOMEPAGE_SECTIONONE,
  SET_HOME_ERROR,
  GET_COLLECTION_SHOPS,
  SET_COLLECTION_SHOPS,
  GET_INSPIRATIONS,
  SET_INSPIRATIONS,
  SET_FOUR_ICONS,
  SET_MIDFOOT,
  SET_NEWSLETTER_TEXT,
  HOMEPAGE_LOADER,
} from "../action-types/homepage__stable";
import axios from "axios";

export const getNavbar = (lang) => {
  return (dispatch) => {
    dispatch({ type: LOD_NAVBAR });
    return axios
      .get(
        `${process.env.PLENTY_MARKET_API_URL}?action=fetchCategories&page=1&itemsPerPage=200&type=item&lang=${lang}`
      )
      .then(async (res) => {
        const { data } = res;
        const { entries } = data;
        const categories = [];
        await entries?.map(async (category, i) => {
          const { details } = category;
          const { categoryId, name } = details?.length > 0 ? details[0] : null;
          const found = categories.find(
            (category) => category[0]?.name === name
          );
          if (
            (name === "PARFUMS" ||
              name === "BEAUTY" ||
              name === "GESICHT" ||
              name === "INTERIEUR" ||
              name === "LIFESTYLE" ||
              name === "BEAUTY FOOD" ||
              name === "CLEAN BEAUTY" ||
              name === "MARKEN" ||
              name === "HERREN" ||
              name === "KÖRPER" ||
              name === "MAKE-UP" ||
              name === "RAUMDÜFTE") &&
            found === undefined
          ) {
            details?.map((category, c) => {
              category["categories"] = [];
            });
            categories.push(details);
          }
          if (name === "HERREN" || name === "FRAUEN" || name === "UNISEX") {
            const index = categories.findIndex(
              (category) => category[0]?.name === "PARFUMS"
            );
            if (index !== -1) {
              categories[index].map((category, c) => {
                const subCategoryFound = category?.categories?.find(
                  (subCategory) => subCategory?.name === name
                );
                if (subCategoryFound === undefined) {
                  category?.categories?.push({
                    id: categoryId,
                    name,
                  });
                }
              });
            }
          }
          if (
            name === "DÜFTE" ||
            name === "RASUR" ||
            name === "BART" ||
            name === "PFLEGE"
          ) {
            const index = categories.findIndex(
              (category) => category[0]?.name === "HERREN"
            );
            if (index !== -1) {
              categories[index].map((category, c) => {
                const subCategoryFound = category?.categories?.find(
                  (subCategory) => subCategory?.name === name
                );
                if (subCategoryFound === undefined) {
                  category?.categories?.push({
                    id: categoryId,
                    name,
                  });
                }
              });
            }
          }
          if (
            name === "NACHTPFLEGE" ||
            name === "GESICHTSPFLEGE" ||
            name === "GESICHTSREINIGUNG"
          ) {
            const index = categories.findIndex(
              (category) => category[0]?.name === "GESICHT"
            );
            if (index !== -1) {
              categories[index].map((category, c) => {
                const subCategoryFound = category?.categories?.find(
                  (subCategory) => subCategory?.name === name
                );
                if (subCategoryFound === undefined) {
                  category?.categories?.push({
                    id: categoryId,
                    name,
                  });
                }
              });
            }
          }
          if (name === "KÖRPERPFLEGE") {
            const index = categories.findIndex(
              (category) => category[0]?.name === "KÖRPER"
            );
            if (index !== -1) {
              categories[index].map((category, c) => {
                const subCategoryFound = category?.categories?.find(
                  (subCategory) => subCategory?.name === name
                );
                if (subCategoryFound === undefined) {
                  category?.categories?.push({
                    id: categoryId,
                    name,
                  });
                }
              });
            }
          }
          if (name === "AUGEN" || name === "TEINT" || name === "LIPPEN") {
            const index = categories.findIndex(
              (category) => category[0]?.name === "MAKE-UP"
            );
            if (index !== -1) {
              categories[index].map((category, c) => {
                const subCategoryFound = category?.categories?.find(
                  (subCategory) => subCategory?.name === name
                );
                if (subCategoryFound === undefined) {
                  category?.categories?.push({
                    id: categoryId,
                    name,
                  });
                }
              });
            }
          }
          if (
            name === "KERZEN" ||
            name === "DIFFUSER" ||
            name === "RAUMSPRAY"
          ) {
            const index = categories.findIndex(
              (category) => category[0]?.name === "RAUMDÜFTE"
            );
            if (index !== -1) {
              categories[index].map((category, c) => {
                const subCategoryFound = category?.categories?.find(
                  (subCategory) => subCategory?.name === name
                );
                if (subCategoryFound === undefined) {
                  category?.categories?.push({
                    id: categoryId,
                    name,
                  });
                }
              });
            }
          }
          if (i === entries.length - 1) {
            categories.push(
              [
                {
                  id: 0,
                  name: "Typentest",
                  url: "typentest/step1",
                  lang: "de",
                },
                {
                  id: 0,
                  name: "Type Test",
                  url: "typentest/step1",
                  lang: "en",
                },
              ],
              [
                {
                  id: 0,
                  name: "Video",
                  url: "video",
                  lang: "de",
                },
                {
                  id: 0,
                  name: "Video",
                  url: "video",
                  lang: "en",
                },
              ],
              [
                {
                  id: 0,
                  name: "Showroom",
                  url: "shop",
                  lang: "de",
                },
                {
                  id: 0,
                  name: "Showroom",
                  url: "shop",
                  lang: "en",
                },
              ],
              [
                {
                  id: 0,
                  name: "Magazin",
                  url: "magazine",
                  lang: "de",
                },
                {
                  id: 0,
                  name: "Magazine",
                  url: "magazine",
                  lang: "en",
                },
              ],
              [
                {
                  id: 0,
                  name: "Kontakt",
                  url: "contact",
                  lang: "de",
                },
                {
                  id: 0,
                  name: "Contact",
                  url: "contact",
                  lang: "en",
                },
              ]
            );
            dispatch({
              type: SET_NAVBAR,
              payload: categories,
            });
            //return categories;
          }
        });
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR, payload: err }));
  };
};

export const getHomePageSctOne = () => {
  return (dispatch) => {
    dispatch({ type: GET_HOMEPAGE_SECTIONONE });
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/section-under-navbars`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_HOMEPAGE_SECTIONONE,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};

export const getCollectionShops = () => {
  return (dispatch) => {
    dispatch({ type: GET_COLLECTION_SHOPS });
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/collection-shops`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_COLLECTION_SHOPS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};

export const getInspirations = () => {
  return (dispatch) => {
    dispatch({ type: GET_INSPIRATIONS });
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/inspirations`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_INSPIRATIONS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};

export const getFourIcons = (lang) => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/four-icons?_locale=${lang}`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_FOUR_ICONS,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};

export const getMidFoot = () => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/mid-footers`)
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_MIDFOOT,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};

export const getNewsletterText = (lang) => {
  return (dispatch) => {
    dispatch({ type: HOMEPAGE_LOADER });

    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/newsletter-page-text?_locale=${lang}`
      )
      .then((res) => {
        const { data } = res;

        dispatch({
          type: SET_NEWSLETTER_TEXT,
          payload: data,
        });

        return data;
      })
      .catch((err) => dispatch({ type: SET_HOME_ERROR }));
  };
};
