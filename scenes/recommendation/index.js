import InspirationBottomOne from "./components/recommendation-header/recommendationHeader";
import ProductsWithFilterHomepage from "./components/products-with-filter/ProductsWithFilter";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import RecommendationBody from "./components/recommendation-body/recommendationBody";
import { useDispatch, useSelector } from "react-redux";
import {
  getHomePageSctOne,
  getMidFoot,
} from "../../services/actions/homepage__stable";
import { getFirstAndSecondThreeProducts } from "../../services/actions/products";
import { getNewsReport } from "../../services/actions/news";
import { useEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import Loader from "../../shareable/Loader";
import Services from "../../shareable/services/Services";
import { getRecommendationPageText } from "../../services/actions/recommendation";

const RecommendationScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { recommendationTextLoading } = useSelector(
    (state) => state.recommendation
  );

  useEffect(() => {
    dispatch(getRecommendationPageText(lang));
  }, [lang]);
  useEffect(() => {
    dispatch(getNewsReport());
    dispatch(getHomePageSctOne());
    dispatch(getMidFoot());
  }, []);

  return (
    <>
      <Header />
      <MobileHeader />
      {recommendationTextLoading ? (
        <Loader type={"component"} />
      ) : (
        <>
          <div className={"recommendation-body"}>
            <InspirationBottomOne />
            <RecommendationBody />
            <ProductsWithFilterHomepage />
            <Services />
            <NewsletterRep />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default RecommendationScene;
