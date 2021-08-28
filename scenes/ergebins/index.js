import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import ErgebnisProducts from "./components/product/ErgbinsProduct";
import ErgebnisTesters from "./components/tester/ErgbinsTester";
import NeuigkeitenSection from "./components/neuigkeiten/Neuigkeiten";
import Footer from "../../layouts/footer/Footer";
import { getNewsReport } from "../../services/actions/news";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { getErgebnisPageText } from "../../services/actions/ergebnis";
import Loader from "../../shareable/Loader";

const ErgebnisScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { pageLoading } = useSelector((state) => state.ergebnis);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getNewsReport());
  }, []);
  useEffect(() => {
    dispatch(getErgebnisPageText(lang));
  }, [lang]);
  return (
    <>
      <Header />
      <MobileHeader />
      {pageLoading ? (
        <Loader type={"component"} />
      ) : (
        <>
          <ErgebnisProducts />
          <ErgebnisTesters />
          <NeuigkeitenSection />
        </>
      )}
      <br />
      <Footer />
    </>
  );
};

export default ErgebnisScene;
