import { combineReducers } from "redux";
import homeReducer from "../services/reducers/homepage__stable";
import newsletterReducer from "../services/reducers/newsletter";
import authReducer from "../services/reducers/auth";
import productsReducer from "../services/reducers/products";
import newsReportReducer from "./reducers/news";
import footerReducer from "./reducers/footer";
import singleProductReducer from "./reducers/single-product";
import kontoPageReducer from "./reducers/konto";
import RegistrationReducer from "./reducers/registration";
import versandartenReducer from "./reducers/versandarten";
import ContactReducer from "./reducers/contact";
import notFoundReducer from "./reducers/not_found_page";
import shopPageReducer from "./reducers/shop";
import brandsProductsReducer from "./reducers/brands";
import addressReducer from "./reducers/address";
import markenReducer from "./reducers/marken";
import basketReducer from "./reducers/basket";
import videoReducer from "./reducers/video";
import categoriesReducer from "./reducers/categories";
import manufactoriesReducer from "./reducers/manufactories";
import ergebnisReducer from "./reducers/ergebnis";
import approvedReducer from "./reducers/approved";
import aboutReducer from "./reducers/about_page";
import checkoutReducer from "./reducers/checkout";
import headerReducer from "./reducers/header";
import typentestReducer from "./reducers/typentest";
import landingReducer from "./reducers/landing";
import lexikonReducer from "./reducers/lexikon";
import socialReducer from "./reducers/social";
import searchPageReducer from "./reducers/search";
import magazineReducer from "./reducers/magazine";
import herrenPageReducer from "./reducers/herren";

const rootReducer = combineReducers({
  about: aboutReducer,
  address: addressReducer,
  approved: approvedReducer,
  auth: authReducer,
  basket: basketReducer,
  brand: brandsProductsReducer,
  category: categoriesReducer,
  checkout: checkoutReducer,
  contact: ContactReducer,
  ergebnis: ergebnisReducer,
  footer: footerReducer,
  header: headerReducer,
  herren: herrenPageReducer,
  konto: kontoPageReducer,
  landing: landingReducer,
  lexikon: lexikonReducer,
  magazine: magazineReducer,
  manufactory: manufactoriesReducer,
  marken: markenReducer,
  navbar: homeReducer,
  news: newsReportReducer,
  newsletter: newsletterReducer,
  notFound: notFoundReducer,
  products: productsReducer,
  registration: RegistrationReducer,
  search: searchPageReducer,
  singleProduct: singleProductReducer,
  shop: shopPageReducer,
  social: socialReducer,
  typentest: typentestReducer,
  versandarten: versandartenReducer,
  video: videoReducer,
});

export default rootReducer;
