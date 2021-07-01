import moment from "moment";

const MagazinAddSection = ({addData1,addData2,addData3}) =>{

    return(
        <div className={"magazin__add__section__container"}>
            <div className={"magazin__add__section__container__item item1"}>
                <div className={"magazin__add__section__container__item--img"} style={{backgroundImage:`url(${addData1?.image?.url})`}}></div>
                <div className={"magazin__add__section__container__item--text"}>
                    <p>{addData1?.header}</p>
                    <h3>
                        {addData1?.text}
                    </h3>
                    <span>{moment(addData1?.date).format("DD.MM.YYYY")}</span>
                </div>
            </div>
            <div className={"magazin__add__section__container__item item2"}>
                <div className={"magazin__add__section__container__item--img"} style={{backgroundImage:`url(${addData2?.image?.url})`}}></div>
                <div className={"magazin__add__section__container__item--text"}>
                    <p>{addData2?.header}</p>
                    <h3>
                        {addData2?.text}
                    </h3>
                    <span>{moment(addData2?.date).format("DD.MM.YYYY")}</span>
                </div>
            </div>
            <div className={"magazin__add__section__container__item item3"}>
                <div className={"magazin__add__section__container__item--img"} style={{backgroundImage:`url(${addData3?.image?.url})`}}></div>
                <div className={"magazin__add__section__container__item--text"}>
                    <p>
                        {addData3?.header}
                    </p>
                    <h3>
                        {addData3?.text}
                    </h3>
                    <span>{moment(addData3?.date).format("DD.MM.YYYY")}</span>
                </div>
            </div>
        </div>
    )
}

export default MagazinAddSection