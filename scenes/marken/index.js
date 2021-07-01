import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import ContactHeader from "../../shareable/contact-header/ContactHeader";
import Marken from "./components/marken/Marken";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMarkens, getMarkenText} from "../../services/actions/marken";
import {Space, Spin} from "antd";

const MarkenScene = () => {
    const dispatch = useDispatch()
    const {markenDataLoaded} = useSelector(state => state.marken)
    const {textDataLoaded} = useSelector(state => state.marken)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(getMarkens())
        dispatch(getMarkenText())
    }, [])

    useEffect(() => {
        if (markenDataLoaded && textDataLoaded) {
            setLoaded(false)
        } else setLoaded(true)
    }, [markenDataLoaded, textDataLoaded])

    const {textData} = useSelector(state => state.marken)
    return (
        <>
            {loaded ?
                <>
                    <Header/>
                    <MobileHeader/>
                    <ContactHeader img={textData?.image?.url}/>
                    <Marken title={textData.header} header={textData.title}/>
                    <Footer/>
                </>
                :
                <div className={"loader__body"}>
                    <Space size="middle">
                        <Spin size="large"/>
                    </Space>
                </div>
            }
        </>
    )
}

export default MarkenScene