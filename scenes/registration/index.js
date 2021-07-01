import RegistrationHeader from "./components/registration-header/RegistrationHeader";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import RegistrationForm from "./components/registration-form/RegistrationForm";
import RegistrationInfo from "./components/registration-info/RegistrationInfo";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {
    getRegisterCountries,
    getRegisterTextData
} from "../../services/actions/registration";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
const RegistrationScene = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserDataFromLocalStorage());
        dispatch(getRegisterCountries())
        dispatch(getRegisterTextData())
    },[])

    const textData = useSelector(state => state.registration.textData)
    return (
        <>
            <Header/>
            <MobileHeader/>
            <div className={"registration__page__body"}>
                <RegistrationHeader textData={textData}/>
                <div className={"registration__page__body__formandtext"}>
                    <RegistrationForm textData={textData}/>
                    <RegistrationInfo textData={textData}/>
                </div>
            </div>

        </>
    )
}

export default RegistrationScene