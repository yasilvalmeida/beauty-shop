const TextBoxOne = ({header,headText,textData}) =>{
    const leftText = textData?.filter(e => e.position !== "right")
    const rightText = textData?.filter(e => e.position === "right")
    return(
        <div className={"text__box__one__container"}>
            <div className={"text__box__one__container__header"}>
                <h2>
                    {headText}
                </h2>
                <p>{header}</p>
            </div>
            <div className={"text__box__one__container__body"}>
                <div className={"text__box__one__container__body__itemOne"}>
                    {leftText?.map((e,i)=>{
                        return(
                            <div className={`text__box__one__container__body__itemOne__${i === 0 ? "item1" : "item2"}`} key={i}>
                                <h4>{e.header}</h4>
                                <p>
                                    {e.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className={"text__box__one__container__body__middle"}>
                </div>
                <div className={"text__box__one__container__body__itemTwo"}>
                    {rightText.map((e,i)=>{
                        return(
                            <div key={i}>
                                <h4>
                                    {e.header}
                                </h4>
                                <p>
                                    {e.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TextBoxOne