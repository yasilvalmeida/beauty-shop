import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import HeadImg from "./components/head-img/HeadImg";
import TextBoxOne from "./components/text-box-one/TextBoxOne";
import TextBoxTwo from "./components/text-box-two/TextBoxTwo";
import Services from "../../shareable/services/Services";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getVersandartenText} from "../../services/actions/versandarten";
import {Space, Spin} from "antd";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const VersandartenScene = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getVersandartenText())
    }, [])
    const versandartenText = useSelector(state => state.versandarten.versandartenText)
    const versandartenLoaded = useSelector(state => state.versandarten.versandartenTextLoaded)
    return (
        <>
            {versandartenLoaded ?
                <div className={"loader__body"}>
                    <Space size="middle">
                        <Spin size="large"/>
                    </Space>
                </div> :
                <>
                    <Header/>
                    <MobileHeader/>
                    <div className={"versandarten__scene__body"}>
                        <HeadImg img={versandartenText?.images?.url}/>
                        <TextBoxOne headText={versandartenText?.shipping_text} header={versandartenText?.header}
                                    textData={versandartenText?.shipping_conditions}/>
                        <TextBoxTwo header={versandartenText?.payment_text} leftText={versandartenText?.payment_options}
                                    rightText={versandartenText?.our_bank_connections}/>
                        <Services/>
                        <div className={"versandarten__scene__body__newsletter"}>
                            <NewsletterRep/>
                        </div>
                    </div>
                    <Footer/>
                </>
            }
        </>
    )
}

export default  VersandartenScene