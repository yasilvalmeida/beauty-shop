import FirstIntro from "./components/first-intro/FirstIntro";
import FirstProducts from "./components/first-products/FirstProducts";
import SecondSection from "./components/second-section/SecondSection";
import InspirationSection from "./components/inspiration/InspirationSection";
import InspirationBottomOne from "./components/inpiration-bottom-one/inspirationBottomOne";
import InspirationBottomTwo from "./components/inspiration-bottom-two/InspirationBottomTwo";
import SecondProducts from "./components/second-products/SecondProducts";
import ProductsWithFilterHomepage from "./components/products-with-filter/ProductsWithFilter";
import FilteredProductBottom from "./components/filtered-product-bottom/FilteredProductBottom";
import VideoPart from "./components/video/VideoPart";
import DpabMagazine from "./components/dpab-magazine/DpabMagazine";
import DpabBottom from "./components/dpab-bottom/DpabBottom";
import BottomVideo from "./components/bottom-videos/BottomVideos";
import FirstIntroMobile from "./components/mobile/firstIntro/FirstIntro";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
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
import RenderModal from "./components/render-modal/RenderModal";
import {
  getFirstIntroPageText,
  getProductsWithLeftTextOne,
  getProductsWithLeftTextTwo,
  getSectionText,
  getInspirationOneText,
  getInspirationTwoText,
  getInspirationThreeText,
  getNewsSectionText,
  getDPABMagazineText,
  getDPABBottomText,
} from "../../services/actions/landing";
import { getVideoData } from "../../services/actions/video";

const Homepage = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.navbar.homePageSctOneLoaded);
  const navlistloaded = useSelector((state) => state.navbar.navListLoaded);
  const headerloaded = useSelector(
    (state) => state.navbar.headerContactsLoaded
  );
  const HPFS = useSelector((state) => state.navbar.homePageSctOne);
  const homepageIntro = HPFS.find((p) => p.position === "HomePage");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const prdctsFirst = useSelector(
    (state) => state?.products?.firstThreeProducts
  );
  const prdctsSecond = useSelector(
    (state) => state?.products?.secondThreeProducts
  );
  const lang = useSelector((state) => state.header.headerLanguage);

  const loader = useSelector((state) => state.navbar.loader);
  const [productsFirst, setProductsFirst] = useState([]);
  const [productsSecond, setProductsSecond] = useState([]);
  const [homeLoader, setHomeLoader] = useState(true);

  useEffect(() => {
    setProductsFirst([]);
    setProductsSecond([]);
    dispatch(getFirstAndSecondThreeProducts(lang));
    dispatch(getFirstIntroPageText(lang));
    dispatch(getProductsWithLeftTextOne(lang));
    dispatch(getProductsWithLeftTextTwo(lang));
    dispatch(getSectionText(lang));
    dispatch(getInspirationOneText(lang));
    dispatch(getInspirationTwoText(lang));
    dispatch(getInspirationThreeText(lang));
    dispatch(getNewsSectionText(lang));
    dispatch(getDPABMagazineText(lang));
    dispatch(getDPABBottomText(lang));
  }, [lang]);
  useEffect(() => {
    setProductsFirst(prdctsFirst);
  }, [prdctsFirst]);
  useEffect(() => {
    setProductsSecond(prdctsSecond);
  }, [prdctsSecond]);
  useEffect(() => {
    dispatch(getVideoData());
    dispatch(getNewsReport());
    dispatch(getHomePageSctOne());
    dispatch(getMidFoot());
    if (localStorage.getItem("popup") !== "shown") {
      showModal();
    }
    localStorage.setItem("popup", "shown");
  }, []);
  useEffect(() => {
    setHomeLoader(loader);
  }, [loader]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Header />
      <MobileHeader />
      {homeLoader ? (
        <Loader type={"component"} />
      ) : (
        <>
          <RenderModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <div className={"homepage-body"}>
            <FirstIntro />
            <FirstIntroMobile />
            <FirstProducts products={productsFirst} />
            <SecondSection />
            <InspirationSection />
            {/* <br className="clear" /> */}
            <InspirationBottomOne />
            <InspirationBottomTwo />
            <SecondProducts products={productsSecond} />
            <ProductsWithFilterHomepage />
            <FilteredProductBottom />
            <VideoPart />
            <BottomVideo />
            <DpabMagazine />
            <DpabBottom />
            <Services />
            <NewsletterRep />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Homepage;
