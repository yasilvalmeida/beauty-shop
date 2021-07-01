import {useRouter} from "next/router";

const BrandsHeader = ({data}) => {
    const router = useRouter()
    return (
        <div className={"brands__header"}>
            <div className={"brands__header__text"}>
                <h3>{data.title}</h3>
                <p>
                    {data.head}
                </p>
                <span>
                   {data.text}
                </span>
                <button onClick={()=>router.push("/shop")}>{data.btnTxt}</button>
            </div>
            <div className={"brands__header__img"}>
                <img src={data.img?.url} alt="/brandsHeader.png"/>
            </div>
        </div>
    )
}

export default BrandsHeader