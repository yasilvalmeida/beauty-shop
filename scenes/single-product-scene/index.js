import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import LeftProductImages from "./components/left-product-images/LeftProductImages";
import RightProductText from "./components/right-product-text/RightProductText";
import SingleProductBottom from "./components/single-product-bottom/SingleProductBottom";
import ProductsWithFilter from "../../shareable/ProductsWithFilter";
import { useState, useEffect } from "react";
import MobileSwipeableCarousel from "./components/left-product-images/mobile-images/MobileSwipeableTop";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import {
  getProductsWithFilter,
  getSingleProduct,
} from "../../services/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { useRouter } from "next/router";
import { Spin, Space } from "antd";
import { getSingleProductText } from "../../services/actions/single-product";

const SingleProductScene = () => {
  const headtext = "Männerpflege";
  const dispatch = useDispatch();
  const router = useRouter();
  const loaded = useSelector((state) => state.products.singleProductLoaded);
  const productData = useSelector((state) => state.products.singleProduct);
  const styles = useSelector((state) => state.singleProdPage.styles);
  useEffect(() => {
    dispatch(getSingleProductText());
    dispatch(getUserDataFromLocalStorage());
    dispatch(getSingleProduct(router?.query?.id));
  }, []);

  return (
    <>
      {loaded ? (
        <div className={"loader__body"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <Header />
          <MobileHeader />
          <div className={"product-single-details-body"}>
            <div className={"product__details__container"}>
              <div className={"product__details__container__top"}>
                <MobileSwipeableCarousel
                  imagesData={productData?.images}
                  elem={productData}
                />
                <LeftProductImages elem={productData} />
                <RightProductText elem={productData} />
              </div>
            </div>
            <SingleProductBottom textData={styles} />
            <div className={"product-bottom-prod-w-filter"}>
              <ProductsWithFilter
                headtext={headtext}
                position={"ProductPage"}
                getProductsWithFilter={getProductsWithFilter}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default SingleProductScene;
