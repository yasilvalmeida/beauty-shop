const ContactHeader = ({img}) =>{
    return(
        <div className={"contact__header__container"}>
            <img src={`${img || "/kontaktheader.png"}`} alt={`${img}`}/>
        </div>
    )
}

export default ContactHeader