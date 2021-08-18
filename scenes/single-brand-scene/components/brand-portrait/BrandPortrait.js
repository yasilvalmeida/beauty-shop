const BrandPortrait = ({data}) => {

    function imageBottomText() {
        return {
            __html: data?.imgTxt?.replace(/\n/g, "<br />")
        };
    }
    function leftInnerTextFunction() {
        return {
            __html: data?.text?.replace(/\n/g, "<br />")
        };
    }

    return (
        <div className={"brand__portrait"}>
            <div className={"brand__portrait__text"}>
                <h3>
                    {data.title}
                </h3>
                <p className={"brand__portrait__text__header"}>
                    {data.head}
                </p>
                <p className={"brand__portrait__text__desc"}>
                    {data.desc}
                </p>
                <p dangerouslySetInnerHTML={leftInnerTextFunction()} className={"brand__portrait__text__txt"}></p>
                <p className={"brand__portrait__text__quote"}>
                    {data.quote}
                </p>
            </div>
            <div className={"brand__portrait__img"}>
                <img src={data?.img?.url} alt="/brandsHeader.png"/>
                <div className={"brand__portrait__img__text"}>
                    <p dangerouslySetInnerHTML={imageBottomText()}></p>
                </div>
            </div>
        </div>
    )
}

export default BrandPortrait