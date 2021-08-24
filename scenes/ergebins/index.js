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
import { Space, Spin, Steps } from "antd";

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
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
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
