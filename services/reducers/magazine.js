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
  SET_MAGAZINE_SINGLE_ARTICLE_DATA,
  SET_MAGAZINE_SINGLE_ARTICLE_ERROR,
  GET_MAGAZINE_SINGLE_BLOG_DATA,
  SET_MAGAZINE_SINGLE_BLOG_DATA,
  SET_MAGAZINE_SINGLE_BLOG_ERROR,
} from "../action-types/magazine";

const initialState = {
  magazinePageTextError: null,
  magazinePageTextLoading: true,
  magazinePageTextData: null,
  magazineCategoriesError: null,
  magazineCategoriesLoading: true,
  magazineCategoriesData: null,
  magazineCategoryIndex: 0,
  magazineArticlesError: null,
  magazineArticlesLoading: true,
  magazineArticlesData: null,
  magazineBlogsError: null,
  magazineBlogsLoading: true,
  magazineBlogsData: null,
  magazineSingleArticleError: null,
  magazineSingleArticleLoading: true,
  magazineSingleArticleData: null,
  magazineSingleBlogError: null,
  magazineSingleBlogLoading: true,
  magazineSingleBlogData: null,
};

const magazineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MAGAZINE_PAGE_TEXT_ERROR:
      return {
        ...state,
        magazinePageTextError: payload,
        magazinePageTextLoading: false,
      };
    case GET_MAGAZINE_PAGE_TEXT_DATA:
      return {
        ...state,
        magazinePageTextLoading: true,
      };
    case SET_MAGAZINE_PAGE_TEXT_DATA:
      return {
        ...state,
        magazinePageTextData: payload,
        magazinePageTextLoading: false,
      };
    case SET_MAGAZINE_CATEGORIES_ERROR:
      return {
        ...state,
        magazineCategoriesError: payload,
        magazineCategoriesLoading: false,
      };
    case GET_MAGAZINE_CATEGORIES_DATA:
      return {
        ...state,
        magazineCategoriesLoading: true,
      };
    case SET_MAGAZINE_CATEGORIES_DATA:
      return {
        ...state,
        magazineCategoriesData: payload,
        magazineCategoriesLoading: false,
      };
    case SET_MAGAZINE_CATEGORY_INDEX:
      return {
        ...state,
        magazineCategoryIndex: payload,
      };
    case SET_MAGAZINE_ARTICLES_ERROR:
      return {
        ...state,
        magazineArticlesError: payload,
        magazineArticlesLoading: false,
      };
    case GET_MAGAZINE_ARTICLES_DATA:
      return {
        ...state,
        magazineArticlesLoading: true,
      };
    case SET_MAGAZINE_ARTICLES_DATA:
      return {
        ...state,
        magazineArticlesData: payload,
        magazineArticlesLoading: false,
      };
    case SET_MAGAZINE_BLOGS_ERROR:
      return {
        ...state,
        magazineBlogsError: payload,
        magazineBlogsLoading: false,
      };
    case GET_MAGAZINE_BLOGS_DATA:
      return {
        ...state,
        magazineBlogsLoading: true,
      };
    case SET_MAGAZINE_BLOGS_DATA:
      return {
        ...state,
        magazineBlogsData: payload,
        magazineBlogsLoading: false,
      };
    case SET_MAGAZINE_SINGLE_ARTICLE_ERROR:
      return {
        ...state,
        magazineSingleArticleError: payload,
        magazineSingleArticleLoading: false,
      };
    case GET_MAGAZINE_SINGLE_ARTICLE_DATA:
      return {
        ...state,
        magazineSingleArticleLoading: true,
      };
    case SET_MAGAZINE_SINGLE_ARTICLE_DATA:
      return {
        ...state,
        magazineSingleArticleData: payload,
        magazineSingleArticleLoading: false,
      };
    case SET_MAGAZINE_SINGLE_BLOG_ERROR:
      return {
        ...state,
        magazineSingleBlogError: payload,
        magazineSingleBlogLoading: false,
      };
    case GET_MAGAZINE_SINGLE_BLOG_DATA:
      return {
        ...state,
        magazineSingleBlogLoading: true,
      };
    case SET_MAGAZINE_SINGLE_BLOG_DATA:
      return {
        ...state,
        magazineSingleBlogData: payload,
        magazineSingleBlogLoading: false,
      };
  }
  return state;
};
export default magazineReducer;
