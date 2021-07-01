import FormBody from "./form-body/FormBody";

const ContactForm = ({textData}) =>{
    return(
        <div className={"contact__Form__form"}>
            <div className={"contact__Form__form__header"}>
                <h3>
                    {textData?.top_of_form_header}
                </h3>
                <p>
                    {textData?.top_of_form_text}
                </p>
            </div>
            <FormBody/>
        </div>
    )
}

export default ContactForm