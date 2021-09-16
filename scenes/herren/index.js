import HerrenHead from "./components/Head";
import FirstProducts from "./components/FirstProducts";
import SecondSection from "./components/SecondSection";
import ProductsWithFilterHarren from "./components/ProductsWithFilter";
import Inspiration from "./components/Inspiration";
import InspirationBottomOne from "./components/InspirationBottomOne";
import InspirationBottomTwo from "./components/InspirationBottomTwo";
import ProductsWithFilterHarrenTwo from "./components/ProductsWithFilterHarrenTwo";
import SecondFilteredProdBottom from "./components/SecondFilteredProdBottom";
import Services from "./components/ServicesHerren";
import Newsletter from "./components/Newsletter";
import FirstComponent from "./components/mobilecomponents/FirstComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollectionShops,
  getHomePageSctOne,
  getInspirations,
  getNavbar,
} from "../../services/actions/homepage__stable";
import {
  getHerrenPageTextData,
  getHerrenInspirationOneTextData,
  getHerrenInspirationTwoTextData,
  getHerrenInspirationThreeTextData,
} from "../../services/actions/herren";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { getNewsReport } from "../../services/actions/news";
import { getProductsWithLeftTextOne } from "../../services/actions/landing";
import Loader from "../../shareable/Loader";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import PageHeader from "../../layouts/header/Header";
import { getEightProductsWithFilter } from "../../services/actions/products";
import { getNewsSectionText } from "../../services/actions/landing";

const HerrenScene = () => {
  const dispatch = useDispatch();

  const { herrenPageTextLoading, herrenPageTextData } = useSelector(
    (state) => state.herren
  );
  const lang = useSelector((state) => state.header.headerLanguage);

  useEffect(() => {
    dispatch(getNavbar());

    dispatch(getNewsReport());
    dispatch(getProductsWithLeftTextOne(lang));
    dispatch(getHomePageSctOne());
    dispatch(getHerrenPageTextData(lang));
    dispatch(getHerrenInspirationOneTextData(lang));
    dispatch(getHerrenInspirationTwoTextData(lang));
    dispatch(getHerrenInspirationThreeTextData(lang));
    dispatch(getNewsSectionText(lang));
  }, [lang]);

  return (
    <>
      <PageHeader />
      <MobileHeader />
      {herrenPageTextLoading ? (
        <Loader type={"component"} />
      ) : (
        <>
          <div className={"harren-main-body"}>
            <HerrenHead />
            <FirstComponent />
            <FirstProducts getFour={getEightProductsWithFilter} />
            <SecondSection sectionTextData={herrenPageTextData} />
            <ProductsWithFilterHarren />
            <div className={"harreninsp"}>
              <Inspiration />
              <InspirationBottomOne />
              <InspirationBottomTwo />
            </div>
            <ProductsWithFilterHarrenTwo />
            <SecondFilteredProdBottom />
            <Services />
            <Newsletter />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default HerrenScene;
