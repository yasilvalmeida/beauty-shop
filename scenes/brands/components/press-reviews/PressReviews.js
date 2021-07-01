const PressReviews = ({data}) => {
    function LeftTextFunction() {
        return {
            __html: data?.text?.replace(/\n/g, "<br />")
        };
    }

    function RightTextFunction() {
        return {
            __html: data?.imgTxt?.replace(/\n/g, "<br />")
        };
    }

    return (
        <div className={"press__reviews"}>
            <div className={"press__reviews__text"}>
                <h3>{data.title}</h3>
                <p className={"press__reviews__text--header"}>
                    {data.head}
                </p>
                <p className={"press__reviews__text--txt"} dangerouslySetInnerHTML={LeftTextFunction()}></p>
            </div>
            <div className={"press__reviews__img"}>
                <img src={data?.img} alt="/brandsHeader.png"/>
                <p dangerouslySetInnerHTML={RightTextFunction()}></p>
            </div>
        </div>
    )
}

export default PressReviews