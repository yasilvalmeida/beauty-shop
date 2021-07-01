const BestellungSingleBottom = ({e}) => {
    return (
        <div className={"bestellungen__single__bottom"}>
            <p className={"bestellungen__single__bottom__left"}>
                gesamtsumme
            </p>
            <div className={"bestellungen__single__bottom__right"}>
                <p className={"bestellungen__single__bottom__right__title"}>rechnung herunterladen</p>
                <div className={"bestellungen__single__bottom__right__info"}>
                    <div className={"bestellungen__single__bottom__right__info__block"}>
                        <div className={"item"}>
                            <p className={"left"}>Zwistchensumme: </p>
                            <p>{e.price}</p>
                        </div>
                        <div className={"item"}>
                            <p className={"left"}>Versand</p>
                            <p>0,00</p>
                        </div>
                    </div>
                    <div className={"bestellungen__single__bottom__right__info__block"}>
                        <div className={"item"}>
                            <p className={"left"}>gestamsumme</p>
                            <p>{e.price}</p>
                        </div>
                        <p className={"inkl"}>
                            (inkl. MwSt.)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestellungSingleBottom