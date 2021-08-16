import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import BrandsHeader from "./components/header/Header";
import SummaryAdds from "./components/summary-adds/SummaryAdds";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  getProducts,
  getProductsWithFilter,
} from "../../services/actions/products";
import { useEffect } from "react";
import Products from "./components/products/Products";
import BrandPortrait from "./components/brand-portrait/BrandPortrait";
import ActiveIngredients from "./components/active-ingredients/ActiveIngredients";
import CareProducts from "./components/care-products/CareProducts";
import Application from "./components/application/Application";
import Points from "./components/points/Points";
import PressReviews from "./components/press-reviews/PressReviews";
import Partners from "./components/partners/Partners";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  getBrandsPageData,
  getBrandsProductsFive,
  getBrandsProductsFour,
  getBrandsProductsOne,
  getBrandsProductsThree,
  getBrandsProductsTwo,
} from "../../services/actions/brands";
import { Space, Spin } from "antd";

const BrandsScene = () => {
  const dispatch = useDispatch();
  const productOne = useSelector((state) => state?.brand.productOne);
  const productTwo = useSelector((state) => state?.brand.productTwo);
  const productThree = useSelector((state) => state?.brand.productThree);
  const productFour = useSelector((state) => state?.brand.productFour);
  const productFive = useSelector((state) => state?.brand.productFive);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getBrandsPageData("yulumi"));
    dispatch(getBrandsProductsOne());
    dispatch(getBrandsProductsTwo());
    dispatch(getBrandsProductsThree());
    dispatch(getBrandsProductsFour());
    dispatch(getBrandsProductsFive());
  }, []);
  const data = useSelector((state) => state.brand.brandPageData);
  const loader = useSelector((state) => state.brand.brandPageDataLoaded);
  return (
    <>
      {loader ? (
        <div className={"loader__body"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <Header />
          <MobileHeader />
          <div className={"brands__page__body"}>
            <BrandsHeader
              data={{
                title: data?.header_title,
                text: data?.header_text,
                link: data?.header_link,
                img: data?.header_img,
                btnTxt: data?.header_btn,
                head: data?.header_head,
              }}
            />
            <SummaryAdds
              data={{
                title: data?.summary_title,
                text: data?.summary_text,
                link: data?.summary_link,
                img: data?.summary_img,
                btnTxt: data?.summary_linktxt,
                head: data?.summary_head,
                head2: data?.summary_head2,
              }}
            />
            <Products
              products={productOne}
              addToWishList={addToWishList}
              getFour={getProductsWithFilter}
            />
            {/* 
            
            <BrandPortrait
              data={{
                title: data?.brand_portrait_title,
                head: data?.brand_portraid_head,
                text: data?.brand_portraid_text,
                quote: data?.brand_portraid_quote,
                imgTxt: data?.brand_portraid_imgtext,
                img: data?.brand_portraid_img,
                desc: data?.brand_portraid_desc,
              }}
            />
            <Products
              products={productTwo}
              addToWishList={addToWishList}
              getFour={getProductsWithFilter}
            />
            <ActiveIngredients
              data={{
                title: data?.active_ingridients_title,
                head: data?.active_ingridients_header,
                img: data?.active_ingridients_img,
                imgTxt: data?.active_ingridients_imgtext,
                text: data?.active_ingridients_text,
              }}
            />
            <CareProducts
              data={data?.brand_page_section_3s}
              desc={data?.care_products_desc}
            />
            <Products
              products={productThree}
              addToWishList={addToWishList}
              getFour={getProductsWithFilter}
            />
            <Application
              data={{
                title: data?.aplication_title,
                head: data?.application_header,
                img: data?.application_img,
                imgTxt: data?.application_imgtext,
                text: data?.application_text,
              }}
            />
            <Points array={data?.brand_page_section_4s} />
            <Products
              products={productFour}
              addToWishList={addToWishList}
              getFour={getProductsWithFilter}
            />
            <PressReviews
              data={{
                title: data?.press_reviews_title,
                text: data?.press_reviews_text,
                imgTxt: data?.press_reviews_imgtext,
                img: data?.press_reviews_img?.url,
                head: data?.press_reviews_header,
              }}
            />
            <Partners array={data?.brand_page_section_5s} />
            <Products
              products={productFive}
              addToWishList={addToWishList}
              getFour={getProductsWithFilter}
            />
            <NewsletterRep /> */}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default BrandsScene;
