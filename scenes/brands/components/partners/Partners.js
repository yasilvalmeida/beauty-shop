const Partners = ({array}) =>{
    const partnersData = [
        {img:"/Beautypunk.png",linkText:"mehr lassen",link:"https://www.beautypunk.com/"},
        {img:"/BeautyIn(logo).png",linkText:"mehr lassen",link:"https://www.beautypunk.com/"},
        {img:"/Femt(logo).png",linkText:"mehr lassen",link:"https://www.beautypunk.com/"},
    ]
    return(
        <div className={"partners"}>
            {array?.map((e,i)=>{
                return(
                    <div className={"partners__items"}>
                        <img src={e.images?.url} alt={e.images.url}/>
                        <a href={e.link} target="_blank" >{e.link_text}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Partners