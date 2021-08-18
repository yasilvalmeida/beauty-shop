const Points = ({array}) => {

    return (
        <div className={"brands__points"}>
            {array?.map((e,i)=>{
                return(
                    <div className={"brands__points__item"} key={i}>
                        <h3>{e.number}.</h3>
                        <span>{e.text}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Points