import HerrenHead from "./components/Head";
import FirstProducts from "./components/FirstProducts";
import SecondSection from "./components/SecondSection";
import ProductsWithFilterHarren from "./components/ProductsWithFilter";
import Inspiration from "./components/Inspiration";
import InspirationBottomOne from "./components/InspirationBottomOne";
import InspirationBottomTwo from "./components/InspirationBottomTwo";
import ProductsWithFilterHarrenTwo from "./components/ProductsWithFilterHarrenTwo";
import SecondFilteredProdBottom from "./components/SecondFilteredProdBottom";
import Services from "./components/ServicesHerren";
import Newsletter from "./components/Newsletter";
import FirstComponent from "./components/mobilecomponents/FirstComponent";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
    getCollectionShops,
    getHomePageSctOne,
    getInspirations,
    getNavbar
} from '../../services/actions/homepage__stable';
import {getUserDataFromLocalStorage} from "../../services/actions/auth"
import { getNewsReport } from '../../services/actions/news';
import {getProductsWithLeftText} from "../../services/actions/products";
import { Space, Spin} from "antd";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import PageHeader from "../../layouts/header/Header"
import {getEightProductsWithFilter} from "../../services/actions/products";

const HerrenScene = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserDataFromLocalStorage());
    }, []);
  
    const [firstData, setFirstData] = useState({});
    const [secondData, setSecondData] = useState({});
    const [inspiration1, setInspiration1] = useState({});
    const [inspiration2, setInspiration2] = useState({});
    const [inspiration3, setInspiration3] = useState({});
    
    useEffect(() => {
        dispatch(getNavbar());
        dispatch(getCollectionShops())
            .then(res => {
                setFirstData(res?.find(elem => elem.position === 'HerrenPageLeft'));
                setSecondData(res?.find(elem => elem.position === 'HerrenPageRight'));
            });
        
        dispatch(getInspirations())
            .then(data => {
                setInspiration1(data.find(elem => elem.position === 'HerrenPageOne'));
                setInspiration2(data.find(elem => elem.position === 'HerrenPageTwo'));
                setInspiration3(data.find(elem => elem.position === 'HerrenPageThre'));
            });
        
        dispatch(getNewsReport());
        dispatch(getProductsWithLeftText());
        dispatch(getHomePageSctOne());
    }, []);
    const headLoaded = useSelector(state=>state.navbar.homePageSctOneLoaded)
    const navlistloaded = useSelector((state) => state.navbar.navListLoaded)
    const headerloaded = useSelector((state) => state.navbar.headerContactsLoaded)
    return(
        <>
            {
                !headLoaded && !navlistloaded ?
                <>
                    <PageHeader/>
                    <MobileHeader/>
                    <div className={"harren-main-body"}>
                        <HerrenHead/>
                        <FirstComponent/>
                        <FirstProducts getFour={getEightProductsWithFilter}/>
                        <SecondSection
                            firstData={firstData}
                            secondData={secondData}
                        />
                        <ProductsWithFilterHarren />
                        <div className={"harreninsp"}>
                            <Inspiration inspiration={inspiration1} />
                            <InspirationBottomOne inspiration={inspiration2} />
                            <InspirationBottomTwo inspiration={inspiration3} />
                        </div>
                        <ProductsWithFilterHarrenTwo/>
                        <SecondFilteredProdBottom/>
                        <Services/>
                        <Newsletter/>

                    </div>
                    <Footer/>
                </>:
                    <div className={"loader__body"}>
                        <Space size="middle">
                            <Spin size="large" />
                        </Space>
                    </div>
            }
        </>
    )
}

export default HerrenScene