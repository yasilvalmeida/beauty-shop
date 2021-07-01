const TextComponent = () => {
    return (
        <>
            <div className={"text-component-body"}>
                <p className={"text1"}>
                    * Preise inkl. Mwst., versandkostenfrei innerhalb Deutschlands.<br/>
                    Lieferungen in die Schweiz erfolgen ohne MwSt. - beachten Sie bitte die abweichenden
                    Bedingungen.<br/>
                    Für den Versand ins Ausland gelten andere Versandkosten.
                </p>
                <p className={"text2"}>
                    Lieferfrist ca. 1-3 Werktage<br/>
                    <b>Art.-Nr. 530-001</b>
                </p>
                <p className={"text3"}>
                    Verantwortlich Person in der EU
                    <br/>
                    <a href="mailto:aramman1999@gmail.com">
                        <span>
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'
                                 className={"letter-svg"}>
                                <rect x='48' y='96' width='416' height='320' rx='40' ry='40' style={{
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "32px"
                                }}/>
                                <polyline points='112 160 256 272 400 160' style={{
                                    fill: "none",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "32px"
                                }}/>
                        </svg>E-MAIL
                        </span>
                    </a>
                </p>
            </div>
        </>
    )
}

export default TextComponent