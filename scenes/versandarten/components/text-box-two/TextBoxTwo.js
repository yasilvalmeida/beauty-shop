const TextBoxTwo = ({header,leftText,rightText}) =>{
    return(
        <div className={"text__box__two__container"}>
            <h2 className={"text__box__two__container__header"}>{header}</h2>
            <div className={"text__box__two__container__body"}>
                <div className={"text__box__two__container__body__left"}>
                    <h3>Zahlungsmöglichkeiten</h3>
                    {
                        leftText.map((e,i)=>{
                            return(
                                <p key={i}>
                                    - {e.text}
                                </p>
                            )
                        })
                    }
                </div>
                <div className={"text__box__two__container__body__right"}>
                    <h3>Unsere Bankverbindung</h3>
                    <div className={"text__box__two__container__body__right__item"}>
                        <div>
                            {rightText.map((e,i)=>{
                                return(
                                    <p key={i}>{e.header}</p>
                                )
                            })}
                        </div>
                        <div>
                            {rightText.map((e,i)=>{
                                return(
                                    <p key={i}>{e.text}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBoxTwo