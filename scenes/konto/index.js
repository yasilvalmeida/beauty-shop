import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import Sidebar from "../../shareable/sidebar/Sidebar";
import KontoContainer from "./components/konto-container/KontoContainer";
import Adressen from "./components/adressen/Adressen";
import { useRouter } from "next/router";
import Nutzerdaten from "./components/nutzerdaten/Nutzerdaten";
import Bestellungen from "./components/bestellungen/Bestellungen";
import WhishList from "./components/whishlist/Whishlist";
import NewsLetter from "./components/newsletter/NewsLetter";
import Lesezeichen from "./components/lesezeichen/Lesezeichen";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  getKontoMainBoxesData,
  getKontoPageTextData,
} from "../../services/actions/konto";
import Loader from "../../shareable/Loader";

const Konto = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const authData = useSelector((state) => state.auth);
  const { kontoMainBoxesLoading } = useSelector((state) => state.konto);

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getKontoMainBoxesData(lang));
    dispatch(getKontoPageTextData(lang));
  }, [lang]);
  useEffect(() => {
    if (authData?.isAuthenticated) {
      router.push("/");
    }
  }, [authData]);
  const router = useRouter();
  return (
    <>
      <PageHeader />
      <MobileHeader />
      {kontoMainBoxesLoading ? (
        <Loader type={"component"} />
      ) : (
        <>
          <div className="konto">
            <Sidebar />
            {router.query.id == "main" && <KontoContainer />}
            {router.query.id == "adressen" && <Adressen />}
            {router.query.id == "nutzerdaten" && <Nutzerdaten />}
            {router.query.id == "bestellungen" && <Bestellungen />}
            {router.query.id == "whishlist" && <WhishList />}
            {router.query.id == "newsletter" && <NewsLetter />}
            {router.query.id == "lesezeichen" && <Lesezeichen />}
          </div>
          {router.query.id == "whishlist" && <NewsletterRep />}
        </>
      )}
      <Footer />
    </>
  );
};

export default Konto;
