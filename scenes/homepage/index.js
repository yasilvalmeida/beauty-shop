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
  getCollectionShops,
  getHomePageSctOne,
  getInspirations,
  getMidFoot,
} from "../../services/actions/homepage__stable";
import {
  getProductsWithFilter,
  getProductsWithLeftText,
} from "../../services/actions/products";
import { getNewsReport } from "../../services/actions/news";
import { useEffect, useLayoutEffect, useState } from "react";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import { Spin, Space } from "antd";
import Services from "../../shareable/services/Services";
import RenderModal from "./components/render-modal/RenderModal";
import { getFirstAndSecondThreeProducts } from "../../services/actions/products";

const Homepage = () => {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.navbar.homePageSctOneLoaded);
  const navlistloaded = useSelector((state) => state.navbar.navListLoaded);
  const headerloaded = useSelector(
    (state) => state.navbar.headerContactsLoaded
  );
  const [firstData, setFirstData] = useState({});
  const [secondData, setSecondData] = useState({});
  const [inspiration, setInspiration] = useState({});
  const HPFS = useSelector((state) => state.navbar.homePageSctOne);
  const homepageIntro = HPFS.find((p) => p.position === "HomePage");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const prdctsFirst = useSelector(
    (state) => state?.products?.firstThreeProducts
  );
  const prdctsSecond = useSelector(
    (state) => state?.products?.secondThreeProducts
  );
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);

  const homePageSctOneLoaded = useSelector(
    (state) => state.navbar.homePageSctOneLoaded
  );

  const loader = useSelector((state) => state.navbar.loader);

  const collectionShopsLoading = useSelector(
    (state) => state.navbar.collectionShopsLoading
  );
  const inspirationsLoading = useSelector(
    (state) => state.navbar.inspirationsLoading
  );
  const fourIconsLoaded = useSelector((state) => state.navbar.fourIconsLoaded);
  const midfootLoaded = useSelector((state) => state.navbar.midfootLoaded);
  const newsletterTextLoaded = useSelector(
    (state) => state.navbar.newsletterTextLoaded
  );
  const [productsFirst, setProductsFirst] = useState([]);
  const [productsSecond, setProductsSecond] = useState([]);

  useEffect(() => {
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [homeLoader, setHomeLoader] = useState(true);

  useEffect(() => {
    dispatch(getCollectionShops()).then((res) => {
      setFirstData(res?.find((elem) => elem.position === "HomePageLeft"));
      setSecondData(res?.find((elem) => elem.position === "HomePageRight"));
    });

    dispatch(getInspirations()).then((data) => {
      setInspiration(data.find((elem) => elem.position === "HomePageOne"));
    });

    dispatch(getProductsWithLeftText());
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

  return (
    <>
      {homeLoader && (
        <div className={"loader__body"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      )}
      <>
        <Header />
        <MobileHeader />
        <RenderModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />

        <div className={"homepage-body"}>
          <FirstIntro />
          <FirstIntroMobile />
          <FirstProducts products={productsFirst} />
          <SecondSection first={firstData} second={secondData} />
          <InspirationSection inspiration={inspiration} />
          <br className="clear" />
          <br className="clear" />
          <br className="clear" />
          <br className="clear" />
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
        <Footer />
      </>
    </>
  );
};

export default Homepage;
