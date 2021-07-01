import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Link from "next/link";

const Marken = ({title,header}) => {
    const {markenData} = useSelector(state => state.marken)
    const [newArray, setNewArray] = useState([])

    var splitArray = function (arr, size) {

        var arr2 = arr.slice(0),
            arrays = [];

        while (arr2.length > 0) {
            arrays.push(arr2.splice(0, size));
        }
        setNewArray([...arrays])

    }


    useEffect(() => {
        splitArray(markenData, 4);
    }, [])

    return (
        <div className={"marken__container"}>
            <div className={"marken__container__header"}>
                <h1 className={"marken__container__header--title"}>{title}</h1>
                <p className={"marken__container__header--subtitle"}>
                    {header}
                </p>
            </div>
            <>
                {newArray?.map((e) => {
                    return (

                        <div className={"marken__container__content"}>
                            {
                                e.map((item, index) => {
                                    return (
                                        <div className={"marken__container__content__item"} key={index}>
                                            <h4 className={"marken__container__content__item--title"}>{item.title}</h4>
                                            {
                                                item?.content?.map((contentItem, key) => {
                                                    return (
                                                        <Link href={`/${contentItem}`} key={key}>
                                                            <p className={"marken__container__content__item--content"}>
                                                                {contentItem}
                                                            </p>
                                                        </Link>

                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
                <div className={"marken__container__mobile__content"}>
                    {
                        markenData?.map((item, index) => {
                            return (
                                <div className={"marken__container__content__item"} key={index}>
                                    <h4 className={"marken__container__content__item--title"}>{item.title}</h4>
                                    {
                                        item?.content?.map((contentItem, key) => {
                                            return (
                                                <Link href={`/${contentItem}`} key={key}>
                                                    <p className={"marken__container__content__item--content"}>
                                                        {contentItem}
                                                    </p>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </>
        </div>
    )
}


export default Marken;