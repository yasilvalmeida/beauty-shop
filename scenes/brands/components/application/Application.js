import {useState, useEffect} from "react"

const Application = ({data}) => {
    function LeftTextFunction() {
        return {
            __html: data?.imgTxt?.replace(/\n/g, "<br />")
        };
    }
    function RightTextFunction() {
        return {
            __html: data?.text?.replace(/\n/g, "<br />")
        };
    }

    return (
        <div className={"application"}>
            <div className={"application__img"}>
                <img src={data?.img?.url} alt="/brandsHeader.png"/>
                <p dangerouslySetInnerHTML={LeftTextFunction()}></p>
            </div>
            <div className={"application__text"}>
                <h3>{data.title}</h3>
                <p className={"application__text__header"}>
                    {data.head}
                </p>
                <p className={"application__text__text"} dangerouslySetInnerHTML={RightTextFunction()}></p>
            </div>
        </div>
    )
}

export default Application