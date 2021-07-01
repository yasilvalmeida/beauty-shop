import Image from "next/image";
import {useSelector} from "react-redux";
import moment from "moment";
import Link from "next/link";

const MagazinSecondSection = () =>{
    const dataText = useSelector(state => state.news.newsReports).find(p => p.position == "MagazinPageTwo")
    return(
        <div className={"magazin__second__section__container"}>
            <Image src={"/magazin/magaz2sect.png"} width={950} height={800} layout={"responsive"}/>
            <div className={"magazin__second__section__container__righttxt"}>
                <p className={"magazin__second__section__container__righttxt--date"}>{moment(dataText?.updated_at).format("DD.MM.YYYY")}</p>
                <p className={"magazin__second__section__container__righttxt--coverstory"}>{dataText?.header}</p>
                <h3 className={"magazin__second__section__container__righttxt--title"}>{dataText?.title}</h3>
                <span className={"magazin__second__section__container__righttxt--txt"}>
                    {dataText?.text}
                </span>
                <Link href={`${dataText?.url}`}>
                    <a href="#" className={"magazin__second__section__container__righttxt--link"}>
                        {dataText?.link_text}
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default MagazinSecondSection