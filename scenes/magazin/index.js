import PageHeader from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import ComponentHeaderBody from "./components/component-header-body/ComponentHeaderBody";
import AddSection from "./components/add-section/AddSection";
import ProductsList from "./components/products-list-top/ProductsList";
import MagazinSecondSection from "./components/magazin-second-section/MagazinSecondSection";
import Loader from "../../shareable/Loader";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import BeautyEssentials from "./components/beauty-esentials/BeautyEsentials";
import MagazinSecondSectionMobile from "./components/magazin-second-section/MagazinSecondSectionMobile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  getMagazinePageText,
  getMagazineCategories,
  getMagazineArticles,
  getMagazineBlogs
} from "../../services/actions/magazine";

const MagazinScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const {
    magazinePageTextLoading,
    magazineCategoriesLoading,
    magazineCategoryIndex,
    magazineArticlesLoading,
    magazineArticlesData,
    magazineBlogsLoading,
    magazineBlogsData,
  } = useSelector((state) => state.magazine);

  useEffect(() => {
    dispatch(getMagazinePageText(lang));
    dispatch(getMagazineCategories(lang));
    dispatch(getMagazineArticles(lang));
    dispatch(getMagazineBlogs(lang));
  }, [lang]);
  useEffect(() => {
    // Load articles here
    dispatch(getMagazineArticles(lang, magazineCategoryIndex));
    dispatch(getMagazineBlogs(lang, magazineCategoryIndex));
  }, [magazineCategoryIndex]);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);

  return (
    <>
      <PageHeader />
      <MobileHeader />
      <div className={"magazin__all__elements"}>
        {magazinePageTextLoading &&
        magazineCategoriesLoading &&
        magazineArticlesLoading &&
        magazineBlogsLoading ? (
          <Loader type={"component"} />
        ) : (
          <>
            <ComponentHeaderBody />
            <AddSection
              addData1={
                magazineBlogsData?.length > 0 ? magazineBlogsData[0] : null
              }
              addData2={
                magazineBlogsData?.length > 1 ? magazineBlogsData[1] : null
              }
              addData3={
                magazineBlogsData?.length > 2 ? magazineBlogsData[2] : null
              }
            />
            <ProductsList />
            <MagazinSecondSection
              dataText={
                magazineArticlesData?.length > 1
                  ? magazineArticlesData[1]
                  : null
              }
            />
            <MagazinSecondSectionMobile
              dataText={
                magazineArticlesData?.length > 1
                  ? magazineArticlesData[1]
                  : null
              }
            />
            <ProductsList />
            <AddSection
              addData1={
                magazineBlogsData?.length > 3 ? magazineBlogsData[3] : null
              }
              addData2={
                magazineBlogsData?.length > 4 ? magazineBlogsData[4] : null
              }
              addData3={
                magazineBlogsData?.length > 5 ? magazineBlogsData[5] : null
              }
            />
            <BeautyEssentials />
            <Social />
            <NewsletterRep />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MagazinScene;
