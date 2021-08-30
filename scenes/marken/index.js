import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import ContactHeader from "../../shareable/contact-header/ContactHeader";
import Loader from "../../shareable/Loader";
import Marken from "./components/marken/Marken";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkens, getMarkenText } from "../../services/actions/marken";

const MarkenScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
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
          <Marken textData={textData} manufactories={manufactories} />
        </>
      ) : (
        <Loader type={"component"} />
      )}
      <Footer />
    </>
  );
};

export default MarkenScene;
