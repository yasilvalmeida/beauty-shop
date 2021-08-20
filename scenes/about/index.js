import PageHeader from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import HeadText from "./components/headtext/HeadText";
import SecondAboutSection from "./components/secondSection/SecondSection";
import ThirdAboutSection from "./components/thirdsection/ThirdSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { getAboutText } from "../../services/actions/about_page";
import { Space, Spin } from "antd";
import { getFirstAndSecondThreeProducts } from "../../services/actions/products";

const AboutScene = () => {
  const dispatch = useDispatch();
  const { loading, aboutText } = useSelector((state) => state.about);
  const lang = useSelector((state) => state.header.headerLanguage);
  const [productsFirst, setProductsFirst] = useState([]);
  const [productsSecond, setProductsSecond] = useState([]);
  const prdctsFirst = useSelector(
    (state) => state?.products?.firstThreeProducts
  );
  const prdctsSecond = useSelector(
    (state) => state?.products?.secondThreeProducts
  );

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);

  useEffect(() => {
    dispatch(getAboutText(lang));
    setProductsFirst([]);
    setProductsSecond([]);
    dispatch(getFirstAndSecondThreeProducts(lang));
  }, [lang]);

  useEffect(() => {
    setProductsFirst(prdctsFirst);
  }, [prdctsFirst]);
  useEffect(() => {
    setProductsSecond(prdctsSecond);
  }, [prdctsSecond]);

  return (
    <>
      <PageHeader />
      <MobileHeader />
      <div className="about-main-body">
        {loading ? (
          <div className={"loader__component"}>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          <>
            <HeadText aboutText={aboutText} />
            <SecondAboutSection
              aboutText={aboutText}
              products={productsFirst}
            />
            <ThirdAboutSection
              aboutText={aboutText}
              products={productsSecond}
            />
          </>
        )}
      </div>
      <Social />
      <NewsletterRep />
      <Footer />
    </>
  );
};

export default AboutScene;
