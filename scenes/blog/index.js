import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import MagazinArtikelHeader from "./components/component-header/MagazinArtikelHeader";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import Loader from "../../shareable/Loader";
import SecondArtikelFirstSection from "./components/sec-artikel-first-section/ArtikelFirstSection";
import MagazSticky from "./components/magazine-sticky-text-part/MagazSticky";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  getMagazinePageText,
  getMagazineCategories,
  getMagazineBlogById,
} from "../../services/actions/magazine";
import { useRouter } from "next/router";

const BlogScene = () => {
  const route = useRouter();
  const { query } = route;
  const { id } = query;
  const lang = useSelector((state) => state.header.headerLanguage);
  const {
    magazinePageTextLoading,
    magazineCategoriesLoading,
    magazineSingleBlogLoading,
  } = useSelector((state) => state.magazine);
  const { socialUrlLoading } = useSelector((state) => state.social);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getMagazinePageText(lang));
    dispatch(getMagazineCategories(lang));
    dispatch(getMagazineBlogById(lang, id));
  }, [lang]);
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <div>
        {magazinePageTextLoading &&
        magazineCategoriesLoading &&
        magazineSingleBlogLoading &&
        socialUrlLoading ? (
          <Loader type={"component"} />
        ) : (
          <>
            <MagazinArtikelHeader />
            <SecondArtikelFirstSection />
            <MagazSticky />
            <Social />
            <NewsletterRep />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogScene;
