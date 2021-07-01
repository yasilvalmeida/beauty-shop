import Link from 'next/link';

const SingleProductBottom = ({textData}) =>{
    return(
        <>
            <div className={"single-product-bottom"}>
                {textData?.map((e, i) => {
                    return (
                        <div className={"single-product-bottom-element"} key={i}>
                            <div className="single-product-bottom-element-img">
                                <Link href={`${e?.link}`}>
                                    <a href="#">
                                        <img style={{justifySelf: "center", marginBottom: "5rem"}}
                                             src={`${e?.images?.url}`}/>
                                    </a>
                                </Link>
                            </div>

                            <p>
                                {e?.text}
                            </p>
                            <Link href={`${e.link}`}>
                                <a href="#">Magazin Artikel Link</a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SingleProductBottom