import ShopHeader from './components/shop-header/ShopHeader';
import ShopHeaderMobile from './components/shop-header/ShopHeaderMobile';
import ShopBody from './components/shop-body/ShopBody';
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNewsReport, getShopLgText} from "../../services/actions/news";
import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import {Space, Spin} from "antd";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import { useRouter } from "next/router";
import Router from "next/router";

const ShopScene = () => {
    const router = useRouter();
    const { brand, category } = router?.query;
    console.log('aux', brand, category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getNewsReport());
        dispatch(getShopLgText());
    }, []);
    const headLoaded = useSelector(state => state.news.newsReportLoading);
    return (
      <>
        {!headLoaded ? (
          <>
            <PageHeader />
            <MobileHeader />
            <div className={"shop-all-elements"}>
              <ShopHeader />
              <ShopHeaderMobile />
              <ShopBody brand={brand} category={category} router={router} />
              <NewsletterRep />
            </div>
            <Footer />
          </>
        ) : (
          <div className={"loader__body"}>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        )}
      </>
    );
}

export default ShopScene
