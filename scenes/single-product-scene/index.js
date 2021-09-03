import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import LeftProductImages from "./components/left-product-images/LeftProductImages";
import RightProductText from "./components/right-product-text/RightProductText";
import SingleProductBottom from "./components/single-product-bottom/SingleProductBottom";
import ProductsWithFilter from "../../shareable/ProductsWithFilter";
import { useEffect } from "react";
import MobileSwipeableCarousel from "./components/left-product-images/mobile-images/MobileSwipeableTop";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import { getProductsWithFilter } from "../../services/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { useRouter } from "next/router";
import Loader from "../../shareable/Loader";
import {
  getSingleProduct,
  getSytles,
  getSingleProductPageText,
} from "../../services/actions/single-product";

const SingleProductScene = () => {
  const headtext = "Männerpflege";
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { singleProductData, singleProductLoading } = useSelector(
    (state) => state.singleProduct
  );
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);

  useEffect(() => {
    dispatch(getSytles(lang));
    dispatch(getSingleProductPageText(lang));
    dispatch(getSingleProduct(router?.query?.id, lang));
  }, [lang]);

  return (
    <>
      <Header />
      <MobileHeader />
      {singleProductLoading ? (
        <Loader type={"component"} />
      ) : (
        <>
          <div className={"product-single-details-body"}>
            <div className={"product__details__container"}>
              <div className={"product__details__container__top"}>
                <MobileSwipeableCarousel
                  imagesData={singleProductData?.images}
                  elem={singleProductData}
                />
                <LeftProductImages elem={singleProductData} />
                <RightProductText elem={singleProductData} />
              </div>
            </div>
            <SingleProductBottom />
            <div className={"product-bottom-prod-w-filter"}>
              <ProductsWithFilter
                headtext={headtext}
                position={"ProductPage"}
                getProductsWithFilter={getProductsWithFilter}
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
export default SingleProductScene;
