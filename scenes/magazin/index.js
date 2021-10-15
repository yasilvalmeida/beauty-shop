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
                magazineArticlesData?.length > 1
                  ? magazineArticlesData[1]
                  : null
              }
              addData2={
                magazineArticlesData?.length > 2
                  ? magazineArticlesData[2]
                  : null
              }
              addData3={
                magazineArticlesData?.length > 3
                  ? magazineArticlesData[3]
                  : null
              }
            />
            <ProductsList />
            <MagazinSecondSection
              dataText={
                magazineArticlesData?.length > 4
                  ? magazineArticlesData[4]
                  : null
              }
            />
            <MagazinSecondSectionMobile
              dataText={
                magazineArticlesData?.length > 4
                  ? magazineArticlesData[4]
                  : null
              }
            />
            <ProductsList />
            <AddSection
              addData1={
                magazineArticlesData?.length > 5
                  ? magazineArticlesData[5]
                  : null
              }
              addData2={
                magazineArticlesData?.length > 6
                  ? magazineArticlesData[6]
                  : null
              }
              addData3={
                magazineArticlesData?.length > 7
                  ? magazineArticlesData[7]
                  : null
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
