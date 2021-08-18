import Link from "next/link";

const CareProducts = ({data, desc}) => {

    return (
        <div className={"care__products"}>
            <div className={"care__products__items"}>
                {data?.map((e, i) => {
                    return (
                        <div className={"care__products__items__element"}  key={i}>
                            {e?.image_position === "left" ?
                                <div className={"care__products__items__element__itemleft"}>
                                    <img src={e?.images?.url} alt={e.images?.url}/>
                                    <div className={"care__products__items__element__itemleft--text"}>
                                        <Link href={e.link}>
                                            <a href="#">{e.link_text}</a>
                                        </Link>
                                        <p>{e.text}</p>
                                    </div>
                                </div>
                                : null}
                            {e.image_position === "right" ?
                                <div className={"care__products__items__element__itemright"} >
                                    <div className={"care__products__items__element__itemleft--text"}>
                                        <Link href={e.link}>
                                            <a href="#">{e.link_text}</a>
                                        </Link>
                                        <p>{e.text}</p>
                                    </div>
                                    <img src={e?.images?.url} alt={e.images?.url}/>
                                </div>
                                : null}
                        </div>
                    )
                })}
            </div>
            <p className={"care__products__description"}>
                {desc}
            </p>
        </div>
    )
}

export default CareProducts