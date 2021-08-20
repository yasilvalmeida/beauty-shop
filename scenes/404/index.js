import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import NotFound from "./components/not-found/NotFound";
import ErrorPageProducts from "./components/products-with-filter/ErrorPageProducts";
import Services from "../../shareable/services/Services";
import ProductOffers from "./components/product-offers/ProductOffers";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import MobileNotFound from "./components/mobile-not-found/MobileNotFound";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getNotFoundText,
  getNotFoundData,
} from "../../services/actions/not_found_page";
import { Space, Spin } from "antd";
import { useSelector } from "react-redux";

const ErrorScene = () => {
  const { loading, notFoundText, notFoundData } = useSelector(
    (state) => state.notFound
  );
  const lang = useSelector((state) => state.header.headerLanguage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getNotFoundText(lang));
    dispatch(getNotFoundData(lang));
  }, [lang]);

  return (
    <>
      <Header />
      <MobileHeader />
      {loading ? (
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <NotFound notFoundText={notFoundText} />
          <MobileNotFound notFoundText={notFoundText} />
          <ProductOffers
            notFoundText={notFoundText}
            notFoundData={notFoundData}
          />
        </>
      )}
      <ErrorPageProducts />
      <Services />
      <NewsletterRep />
      <Footer />
    </>
  );
};

export default ErrorScene;
