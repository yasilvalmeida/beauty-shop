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

const ErgebnisScene = () => {
  const dispatch = useDispatch();
  const parameters = useSelector((state) => state.ergebnis.parameters);
  
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getNewsReport());
  }, []);
  return (
    <>
      <Header />
      <MobileHeader />
      <ErgebnisProducts parameters={parameters} />
      <ErgebnisTesters />
      <NeuigkeitenSection />
      <br />
      <Footer />
    </>
  );
};

export default ErgebnisScene;
