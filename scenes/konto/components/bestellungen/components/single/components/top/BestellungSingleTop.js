const BestellungSingleTop = ({e,setShow}) =>{
    return(
        <div className={"bestellungen__single__top"}>
            <div className={"bestellungen__single__top__left"}>
                <div className={"bestellungen__single__top__left__item"}>
                    <p className={"bestellungen__single__top__left__item__title"}>Bestelldatum</p>
                    <p>{e.date}</p>
                </div>
                <div className={"bestellungen__single__top__left__item"}>
                    <p className={"bestellungen__single__top__left__item__title"}>Zahlungsart</p>
                    <p>PayPal</p>
                </div>
                <div className={"bestellungen__single__top__left__far"}>
                    <p className={"bestellungen__single__top__left__far__title"}>status</p>
                    <p>Zahlungstet ertflogita</p>
                </div>
            </div>
            <div className={"bestellungen__single__top__right"}>
                <button onClick={()=>setShow(false)}>Artikel Zurucksenden</button>
                <a href="#">Wie sende ich etwas zuruck? </a>
            </div>
        </div>
    )
}

export default BestellungSingleTop