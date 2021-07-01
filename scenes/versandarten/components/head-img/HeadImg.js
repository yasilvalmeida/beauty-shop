const HeadImg = ({img}) =>{

    return(
        <div className={"versandarten__head__body"}>
            <img src={`${img || "/versandartenhead.png"}`} alt={`${img || "/versandartenhead.png"}`}/>
        </div>
    )
}

export default HeadImg