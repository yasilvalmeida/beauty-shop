import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import ErgebnisProducts from "./components/product/ErgbinsProduct";
import ErgebnisTesters from "./components/tester/ErgbinsTester";
import NeuigkeitenSection from "./components/neuigkeiten/Neuigkeiten";
import {getNewsReport} from "../../services/actions/news";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Header from '../../layouts/header/Header';
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const Ergebnis = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getNewsReport());
    }, []);
    return (
        <>
            <Header/>
            <MobileHeader/>
            <ErgebnisProducts/>
            <ErgebnisTesters/>
            <NeuigkeitenSection/>
        </>
    );
};

export default Ergebnis;
