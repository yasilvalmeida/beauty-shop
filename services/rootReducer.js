import {combineReducers} from "redux";
import homeReducer from "../services/reducers/homepage__stable";
import newsletterReducer from "../services/reducers/newsletter";
import authReducer from "../services/reducers/auth";
import productsReducer from "../services/reducers/products";
import newsReportReducer from "./reducers/news";
import footerReducer from "./reducers/footer";
import singleProductPageReducer from "./reducers/single-product";
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

const rootReducer = combineReducers({
    navbar: homeReducer,
    newsletter: newsletterReducer,
    auth: authReducer,
    products: productsReducer,
    news: newsReportReducer,
    footer: footerReducer,
    singleProdPage: singleProductPageReducer,
    konto: kontoPageReducer,
    registration: RegistrationReducer,
    versandarten: versandartenReducer,
    contact: ContactReducer,
    notFoundReducer: notFoundReducer,
    shop: shopPageReducer,
    brand: brandsProductsReducer,
    address: addressReducer,
    marken: markenReducer,
    basket: basketReducer,
    video: videoReducer
});

export default rootReducer;
