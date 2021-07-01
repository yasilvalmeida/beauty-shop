import Icons from "./info-icons/InfoIcons";
const RegistrationInfo = ({textData}) => {
    console.log(Icons)
    return (
        <div className={"registration__info__container"}>
            <h2 className={"registration__info__container--title"}>{textData?.text_top_of_image}</h2>
            <div className={"registration__info__container--img"}>
                <img src={`${textData?.images?.url || "/anzeige-final.jpg"}`} alt={textData?.images?.url}/>
            </div>
            <div className={"registration__info__container__textitems"}>
                {textData?.benefits?.map((e,i)=>{
                    return(
                        <div  className={"registration__info__container__textitems--item"} key={i}>
                            {Icons[i]}
                            <p>{e.benefit}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RegistrationInfo