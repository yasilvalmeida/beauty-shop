import Link from "next/link";

const SummaryAdds = ({data}) => {
    return (
        <div className={"summary__adds"}>
            <div className={"summary__adds__img"}>
                <img src={data.img?.url} alt="/brandsHeader.png"/>
            </div>
            <div className={"summary__adds__text"}>
                <h3>{data.title}</h3>
                <p className={"summary__adds__text__smheader"}>
                    {data.head}
                </p>
                <p className={"summary__adds__text__smhbot"}>
                    {data.head2}
                </p>
                <span>
                    {data.text}
                </span>
                <Link href={data?.link || "/404"}>
                    <a href="#">
                        {data.btnTxt ? data.btnTxt: 'Mehr lesen'}
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SummaryAdds