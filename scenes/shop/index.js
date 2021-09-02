import ShopHeader from "./components/shop-header/ShopHeader";
import ShopHeaderMobile from "./components/shop-header/ShopHeaderMobile";
import ShopBody from "./components/shop-body/ShopBody";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import Loader from "../../shareable/Loader";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { getShopPageText } from "../../services/actions/shop";
import { useRouter } from "next/router";

const ShopScene = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { shopPageTextLoading } = useSelector((state) => state.shop);
  const { brand, category } = router?.query;

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getShopPageText(lang));
  }, [lang]);

  return (
    <>
      <PageHeader />
      <MobileHeader />
      {shopPageTextLoading ? (
        <Loader type={"component"} />
      ) : (
        <>
          <div className={"shop-all-elements"}>
            <ShopHeader />
            <ShopHeaderMobile />
            <ShopBody brand={brand} category={category} router={router} />
            <NewsletterRep />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ShopScene;
