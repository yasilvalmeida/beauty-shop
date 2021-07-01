const Products = ({products}) =>{
    return(
        <>
            <div className={"about-products-list"}>
                {
                    products.map((e,i)=>{
                        return(
                            <div key={i}>
                                <img src={e.image} alt=""/>
                                <a href={e.link}>Jetzt Shoppen</a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products