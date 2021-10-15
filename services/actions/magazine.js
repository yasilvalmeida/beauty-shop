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
          `${process.env.NEXT_PUBLIC_API_URL}/magazine-blogs?_locale=${lang}&_sort=id:ASC`
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
