import {useState, useEffect} from "react"

const ActiveIngredients = ({data}) => {

    function firstTextFunction() {
        return {
            __html: data?.text?.replace(/\n/g, "<br />")
        };
    }
    function leftTextFunction() {
        return{
            __html: data?.imgTxt?.replace(/\n/g, "<br />")
        }
    }

    useEffect(() => {



    }, [])
    return (
        <div className={"active__ingredients"}>
            <div className={"active__ingredients__img"}>
                <img src={data?.img?.url} alt="/brandsHeader.png"/>
                <div className={"active__ingredients__img__text"}>
                        <p dangerouslySetInnerHTML={leftTextFunction()}></p>
                </div>
            </div>
            <div className={"active__ingredients__text"}>
                <h3>
                    {data.title}
                </h3>
                <p className={"active__ingredients__text__header"}>
                    {data.head}
                </p>
                <p dangerouslySetInnerHTML={firstTextFunction()} className={"active__ingredients__text__txt"}></p>
            </div>
        </div>
    )
}

export default ActiveIngredients