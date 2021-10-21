import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import MagazinArtikelHeader from "./components/component-header/MagazinArtikelHeader";
import ArtikelFirstSectionBody from "./components/artikel-first-section/ArtikelFirstSection";
import ArtikelFirstSecBottom from "./components/artikel-first-sec-bottom/ArtikelFirstSecBottom";
import MagazSticky from "./components/magazine-sticky-text-part/MagazSticky";
import ArtikelCenteredSection from "./components/artikel-centered-text/ArtikelCenteredTextSection";
import ArtikelTwoImages from "./components/artikel-two-images/ArtikelTwoImages";
import ArtikelProductsList from "./components/artikel-products-list/ArtikelProductsList";
import Loader from "../../shareable/Loader";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useState, useEffect } from "react";
import CarouselArtikel from "./components/carousel/CarouselArtikel";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  getMagazinePageText,
  getMagazineCategories,
  getMagazineArticleById,
} from "../../services/actions/magazine";
import { useRouter } from "next/router";

const ArticleScene = () => {
  const route = useRouter();
  const { query } = route;
  const { id } = query;
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const {
    magazinePageTextLoading,
    magazineCategoriesLoading,
    magazineSingleArticleLoading,
    magazineSingleArticleData,
  } = useSelector((state) => state.magazine);
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getMagazinePageText(lang));
    dispatch(getMagazineCategories(lang));
    dispatch(getMagazineArticleById(lang, id));
  }, [lang]);
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <div className={"artikel__all__elements"}>
        {!showSlider ? (
          magazinePageTextLoading &&
          magazineCategoriesLoading &&
          magazineSingleArticleLoading ? (
            <Loader type={"component"} />
          ) : (
            <>
              <MagazinArtikelHeader />
              <ArtikelFirstSectionBody />
              <ArtikelFirstSecBottom setShowSlider={setShowSlider} />
              <MagazSticky />
              <ArtikelCenteredSection />
              <ArtikelTwoImages />
              <ArtikelProductsList />
              <Social />
              <NewsletterRep />
            </>
          )
        ) : (
          <>
            <CarouselArtikel setShowSlider={setShowSlider} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ArticleScene;
