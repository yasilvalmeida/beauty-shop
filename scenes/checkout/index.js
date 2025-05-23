import CheckoutProducts from "./components/checkout-products/CheckoutProducts";
import CheckoutProductsData from "./components/checkout-products-data/CheckoutProductsData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { getCheckoutPageData } from "../../services/actions/checkout";
import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import Loader from "../../shareable/Loader";

const CheckoutScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { checkoutPageData, checkoutPageLoading } = useSelector(
    (state) => state.checkout
  );

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);

  useEffect(() => {
    dispatch(getCheckoutPageData(lang));
  }, [lang]);

  return (
    <>
      <PageHeader />
      <MobileHeader />
      {checkoutPageLoading ? (
        <Loader type={"component"} />
      ) : (
        <div className={"checkout__scene__container"}>
          <div className={"checkout__scene__container--title"}>
            <h2>{checkoutPageData?.header}</h2>
          </div>
          <div className={"checkout__scene__container__body"}>
            <CheckoutProducts checkoutPageData={checkoutPageData} />
            <CheckoutProductsData checkoutPageData={checkoutPageData} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CheckoutScene;
