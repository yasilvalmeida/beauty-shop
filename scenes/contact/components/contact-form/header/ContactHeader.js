const ContactFormHeader = ({textData}) =>{
    return(
        <div className={"contact__form__header"}>
            <h2>{textData?.contact_text}</h2>
            <p>{textData?.text_1}</p>
            <p>{textData?.text_2}</p>
            <p>{textData?.text_3}</p>
            <p>{textData?.text_4}</p>
            <p>{textData?.text_5}</p>
            <p>{textData?.text_6}</p>
        </div>
    )
}

export default ContactFormHeader