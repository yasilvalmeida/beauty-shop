import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import ContactHeader from "../../shareable/contact-header/ContactHeader";
import Marken from "./components/marken/Marken";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkens, getMarkenText } from "../../services/actions/marken";
import { Space, Spin } from "antd";

const MarkenScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.navbar.selectedLanguage);
  const { markenDataLoaded } = useSelector((state) => state.marken);
  const { textDataLoaded } = useSelector((state) => state.marken);
  const { textData } = useSelector((state) => state.marken);
  const [loaded, setLoaded] = useState(false);
  const manufactories = useSelector((state) => state.manufactory.manufactories);

  useEffect(() => {
    dispatch(getMarkens());
    dispatch(getMarkenText(lang));
  }, [lang]);

  useEffect(() => {
    if (markenDataLoaded && textDataLoaded) {
      setLoaded(false);
    } else setLoaded(true);
  }, [markenDataLoaded, textDataLoaded]);

  return (
    <>
      <Header />
      <MobileHeader />
      {loaded ? (
        <>
          <ContactHeader img={textData?.image?.url} />
          <Marken
            textData={textData}
            manufactories={manufactories}
          />
        </>
      ) : (
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MarkenScene;
