import {useState} from "react"
const MagazinProductsWhite = ({elem}) =>{
    const [rotate,setRotate] = useState("")
    const [transformed,setTransformed] = useState("")
    return(
        <div className={"magazin__single__item__body__white"}
             onMouseOver={()=>{
                 setRotate("rotated")
                 setTransformed("transformed")
             }}
             onMouseLeave={()=>{
                 setRotate("")
                 setTransformed("")
             }}
        >
            <div className={"magazin__single__item__body__white__image"}>
                <img src={elem.image} alt="item"/>
            </div>
            <div className={"magazin__single__item__body__white__text"}>
                <div className={"magazin__single__item__body__white__text--nohover"}>
                    <h3>{elem.nohovertext1}</h3>
                    <p>{elem.nohovertext2}</p>
                    <p className={`plusik ${rotate}`}
                    >
                        +
                    </p>
                </div>
                <div className={`magazin__single__item__body__white__text__hover ${transformed}`}>
                    <h3 className={"magazin__single__item__body__white__text__hover--name"}>{elem.name}</h3>
                    <p className={"magazin__single__item__body__white__text__hover--type"}>{elem.type}</p>
                    <p className={"magazin__single__item__body__white__text__hover--type2"}>{elem.type2}</p>
                    <p className={"magazin__single__item__body__white__text__hover--price"}>{elem.price}</p>
                    <button className={"magazin__single__item__body__white__text__hover--button"}>
                        <p>Quick shop</p>
                        {" "}
                        <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 512 512'  style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px",width:"22px",height:"22px" ,stroke:"#7b7b7b"}} className={"letter-svg"}>
                            <circle cx='176' cy='416' r='16' />
                            <circle cx='400' cy='416' r='16' />
                            <polyline points='48 80 112 80 160 352 416 352' />
                            <path d='M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128'/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MagazinProductsWhite