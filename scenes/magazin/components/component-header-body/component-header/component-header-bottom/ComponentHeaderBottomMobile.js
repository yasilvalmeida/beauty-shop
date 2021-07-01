import {useSelector} from "react-redux";
import moment from "moment";
import Link from "next/link";
const ComponentHeaderBottomMobile = () =>{
    const dataText = useSelector(state => state.news.newsReports).find(p => p.position = "MagazinPageOne")
    console.log(dataText)
    return(
        <div className={"component__header__bottom__mobile"}>
            <div className={"component__header__bottom__mobile__white"}>
                <span className={"component__header__bottom__body__white__text--date"}>
                    {moment(dataText?.updated_at).format("DD.MM.YYYY")}
                </span>
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
    )
}

export default ComponentHeaderBottomMobile