import ShopHeader from './components/shop-header/ShopHeader'
import ShopHeaderMobile from './components/shop-header/ShopHeaderMobile'
import ShopBody from './components/shop-body/ShopBody'
// import ShopBodyFooter from "./components/shop-body/shop-body-footer/ShopBodyFooter";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getNewsReport, getShopLgText} from "../../services/actions/news";
import PageHeader from "../../layouts/header/Header"
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import {getNavbar} from "../../services/actions/homepage__stable";
import {Space, Spin} from "antd";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import {getShopProducts} from "../../services/actions/shop";

const ShopScene = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getNewsReport());
        dispatch(getShopLgText());
        dispatch(getNavbar());
        dispatch(getShopProducts())
    }, []);
    const headLoaded = useSelector(state => state.news.newsReportLoading)
    const navlistloaded = useSelector((state) => state.navbar.navListLoaded)
    return (
        <>
            {
                !headLoaded && !navlistloaded ?
                    <>
                        <PageHeader/>
                        <MobileHeader/>
                        <div className={"shop-all-elements"}>
                            <ShopHeader/>
                            <ShopHeaderMobile/>
                            <ShopBody/>
                            <NewsletterRep/>
                        </div>
                        <Footer/>
                    </> :
                    <div className={"loader__body"}>
                        <Space size="middle">
                            <Spin size="large"/>
                        </Space>
                    </div>
            }
        </>
    )
}

export default ShopScene

