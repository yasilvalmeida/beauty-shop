import Image from "next/image";
import {useSelector} from "react-redux";
import moment from "moment";
import Link from "next/link";
const ComponentHeaderBottom = () =>{
    const dataText = useSelector(state => state.news.newsReports).find(p => p.position = "MagazinPageOne")
    return(
        <div className={"component__header__bottom__body"}>
            <div className={"component__header__bottom__body__white"}>
                <div className={"component__header__bottom__body__white__image"}>
                    <Image src={`${dataText?.images?.url || "/magazin/magazin2.png"}`} layout={"responsive"} width={1300} height={630}/>
                </div>
                <div className={"component__header__bottom__body__white__text"}>
                    <span className={"component__header__bottom__body__white__text--date"}>{moment(dataText?.updated_at).format("DD.MM.YYYY")}</span>
                    <p className={"component__header__bottom__body__white__text--coverstory"}>{dataText?.header}</p>
                    <h2 className={"component__header__bottom__body__white__text--title"}>
                        {dataText?.title}
                    </h2>
                    <span className={"component__header__bottom__body__white__text--txt"}>
                        {dataText?.text}
                    </span>
                    <Link href={`${dataText?.url}`} >
                        <a href="#" className={"component__header__bottom__body__white__text--link"}>
                            {dataText?.link_text}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ComponentHeaderBottom