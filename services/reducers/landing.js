import {
  SET_RENDER_MODAL_ERROR,
  GET_RENDER_MODAL_DATA,
  SET_RENDER_MODAL_DATA,
  SET_FIRST_INTRO_ERROR,
  GET_FIRST_INTRO_DATA,
  SET_FIRST_INTRO_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_ONE_ERROR,
  GET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_TWO_ERROR,
  GET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA,
  SET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA,
  SET_SECTION_TEXT_ERROR,
  GET_SECTION_TEXT_DATA,
  SET_SECTION_TEXT_DATA,
  SET_INSPIRATION_ONE_TEXT_ERROR,
  GET_INSPIRATION_ONE_TEXT_DATA,
  SET_INSPIRATION_ONE_TEXT_DATA,
  SET_INSPIRATION_TWO_TEXT_ERROR,
  GET_INSPIRATION_TWO_TEXT_DATA,
  SET_INSPIRATION_TWO_TEXT_DATA,
  SET_INSPIRATION_THREE_TEXT_ERROR,
  GET_INSPIRATION_THREE_TEXT_DATA,
  SET_INSPIRATION_THREE_TEXT_DATA,
  SET_NEWS_SECTION_TEXT_ERROR,
  GET_NEWS_SECTION_TEXT_DATA,
  SET_NEWS_SECTION_TEXT_DATA,
  SET_DPAB_MAGAZINE_TEXT_ERROR,
  GET_DPAB_MAGAZINE_TEXT_DATA,
  SET_DPAB_MAGAZINE_TEXT_DATA,
  SET_DPAB_BOTTOM_TEXT_ERROR,
  GET_DPAB_BOTTOM_TEXT_DATA,
  SET_DPAB_BOTTOM_TEXT_DATA,
} from "../action-types/landing";

const initialState = {
  renderModalError: null,
  renderModalLoading: true,
  renderModalData: null,
  firstIntroError: null,
  firstIntroLoading: true,
  firstIntroData: null,
  productsWithLeftTextOneError: null,
  productsWithLeftTextOneLoading: true,
  productsWithLeftTextOneData: null,
  productsWithLeftTextTwoError: null,
  productsWithLeftTextTwoLoading: true,
  productsWithLeftTextTwoData: null,
  sectionTextError: null,
  sectionTextLoading: true,
  sectionTextData: null,
  inspirationOneTextError: null,
  inspirationOneTextLoading: true,
  inspirationOneTextData: null,
  inspirationTwoTextError: null,
  inspirationTwoTextLoading: true,
  inspirationTwoTextData: null,
  inspirationThreeTextError: null,
  inspirationThreeTextLoading: true,
  inspirationThreeTextData: null,
  newsSectionTextError: null,
  newsSectionTextLoading: true,
  newsSectionTextData: null,
  dpabMagazineTextError: null,
  dpabMagazineTextLoading: true,
  dpabMagazineTextData: null,
  dpabBottomTextError: null,
  dpabBottomTextLoading: true,
  dpabBottomTextData: null,
};

const landingRedcucer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RENDER_MODAL_ERROR:
      return {
        ...state,
        renderModalError: payload,
        renderModalLoading: false,
      };
    case GET_RENDER_MODAL_DATA:
      return {
        ...state,
        renderModalLoading: true,
      };
    case SET_RENDER_MODAL_DATA:
      return {
        ...state,
        renderModalData: payload,
        renderModalLoading: false,
      };
    case SET_FIRST_INTRO_ERROR:
      return {
        ...state,
        firstIntroError: payload,
        firstIntroLoading: false,
      };
    case GET_FIRST_INTRO_DATA:
      return {
        ...state,
        firstIntroLoading: true,
      };
    case SET_FIRST_INTRO_DATA:
      return {
        ...state,
        firstIntroData: payload,
        firstIntroLoading: false,
      };
    case SET_PRODUCTS_WITH_LEFT_TEXT_ONE_ERROR:
      return {
        ...state,
        productsWithLeftTextOneError: payload,
        productsWithLeftTextOneLoading: false,
      };
    case GET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA:
      return {
        ...state,
        productsWithLeftTextOneLoading: true,
      };
    case SET_PRODUCTS_WITH_LEFT_TEXT_ONE_DATA:
      return {
        ...state,
        productsWithLeftTextOneData: payload,
        productsWithLeftTextOneLoading: false,
      };
    case SET_PRODUCTS_WITH_LEFT_TEXT_TWO_ERROR:
      return {
        ...state,
        productsWithLeftTextTwoError: payload,
        productsWithLeftTextTwoLoading: false,
      };
    case GET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA:
      return {
        ...state,
        productsWithLeftTextTwoLoading: true,
      };
    case SET_PRODUCTS_WITH_LEFT_TEXT_TWO_DATA:
      return {
        ...state,
        productsWithLeftTextTwoData: payload,
        productsWithLeftTextTwoLoading: false,
      };
    case SET_SECTION_TEXT_ERROR:
      return {
        ...state,
        sectionTextError: payload,
        sectionTextLoading: false,
      };
    case GET_SECTION_TEXT_DATA:
      return {
        ...state,
        sectionTextLoading: true,
      };
    case SET_SECTION_TEXT_DATA:
      return {
        ...state,
        sectionTextData: payload,
        sectionTextLoading: false,
      };
    case SET_INSPIRATION_ONE_TEXT_ERROR:
      return {
        ...state,
        inspirationOneTextError: payload,
        inspirationOneTextLoading: false,
      };
    case GET_INSPIRATION_ONE_TEXT_DATA:
      return {
        ...state,
        inspirationOneTextLoading: true,
      };
    case SET_INSPIRATION_ONE_TEXT_DATA:
      return {
        ...state,
        inspirationOneTextData: payload,
        inspirationOneTextLoading: false,
      };
    case SET_INSPIRATION_TWO_TEXT_ERROR:
      return {
        ...state,
        inspirationTwoTextError: payload,
        inspirationTwoTextLoading: false,
      };
    case GET_INSPIRATION_TWO_TEXT_DATA:
      return {
        ...state,
        inspirationTwoTextLoading: true,
      };
    case SET_INSPIRATION_TWO_TEXT_DATA:
      return {
        ...state,
        inspirationTwoTextData: payload,
        inspirationTwoTextLoading: false,
      };
    case SET_INSPIRATION_THREE_TEXT_ERROR:
      return {
        ...state,
        inspirationThreeTextError: payload,
        inspirationThreeTextLoading: false,
      };
    case GET_INSPIRATION_THREE_TEXT_DATA:
      return {
        ...state,
        inspirationThreeTextLoading: true,
      };
    case SET_INSPIRATION_THREE_TEXT_DATA:
      return {
        ...state,
        inspirationThreeTextData: payload,
        inspirationThreeTextLoading: false,
      };
    case SET_NEWS_SECTION_TEXT_ERROR:
      return {
        ...state,
        newsSectionTextError: payload,
        newsSectionTextLoading: false,
      };
    case GET_NEWS_SECTION_TEXT_DATA:
      return {
        ...state,
        newsSectionTextLoading: true,
      };
    case SET_NEWS_SECTION_TEXT_DATA:
      return {
        ...state,
        newsSectionTextData: payload,
        newsSectionTextLoading: false,
      };
    case SET_DPAB_MAGAZINE_TEXT_ERROR:
      return {
        ...state,
        dpabMagazineTextError: payload,
        dpabMagazineTextLoading: false,
      };
    case GET_DPAB_MAGAZINE_TEXT_DATA:
      return {
        ...state,
        dpabMagazineTextLoading: true,
      };
    case SET_DPAB_MAGAZINE_TEXT_DATA:
      return {
        ...state,
        dpabMagazineTextData: payload,
        dpabMagazineTextLoading: false,
      };
    case SET_DPAB_BOTTOM_TEXT_ERROR:
      return {
        ...state,
        dpabBottomTextError: payload,
        dpabBottomTextLoading: false,
      };
    case GET_DPAB_BOTTOM_TEXT_DATA:
      return {
        ...state,
        dpabBottomTextLoading: true,
      };
    case SET_DPAB_BOTTOM_TEXT_DATA:
      return {
        ...state,
        dpabBottomTextData: payload,
        dpabBottomTextLoading: false,
      };
  }
  return state;
};
export default landingRedcucer;
