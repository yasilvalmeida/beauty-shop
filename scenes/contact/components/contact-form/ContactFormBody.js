import ContactHeader from "./header/ContactHeader";
import ContactForm from "./form/ContactForm";

const ContactFormBody = ({textData}) =>{
    return(
        <div className={"contact__form__body"}>
            <ContactHeader textData = {textData}/>
            <ContactForm textData={textData}/>
        </div>
    )
}

export default ContactFormBody