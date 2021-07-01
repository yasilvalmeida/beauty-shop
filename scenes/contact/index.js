import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import ContactHeader from "../../shareable/contact-header/ContactHeader";
import ContactFormBody from "./components/contact-form/ContactFormBody";
import Services from "../../shareable/services/Services";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {getContactData} from "../../services/actions/contact";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const ContactScene = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserDataFromLocalStorage());
        dispatch(getContactData())
    },[])
    const textData = useSelector(state => state.contact.textData)
    return(
        <>
            <Header/>
            <MobileHeader/>
            <div className={"contact__scene__body"}>
                <ContactHeader img={textData?.images?.url}/>
                <ContactFormBody textData = {textData} />
            </div>
            <Services/>
            <NewsletterRep/>
            <Footer/>
        </>
    )
}

export default ContactScene