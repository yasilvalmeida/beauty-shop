const BeautyEssentialItem = ({elem}) =>{
    return(
        <div className={"beauty__essential__container__items__elem__body"}>
            <div className={"beauty__essential__container__items__elem__body--img"}>
                <img src={elem.image} alt="elem"/>
            </div>
            <div className={"beauty__essential__container__items__elem__body--text"}>
                <p className={"small"}>{elem.small}</p>
                <h2 className={"title"}>{elem.title}</h2>
                <p className={"text"}>{elem.text}</p>
                <p className={"date"}>{elem.date}</p>
            </div>
        </div>
    )
}

export default BeautyEssentialItem