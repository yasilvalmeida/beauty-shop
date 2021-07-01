import CheckoutSingleProduct from "../../../../shareable/Products/checkout-ptoducts/CheckoutSingleProduct";

const CheckoutProducts = () =>{
    const data = [1,1,2]
    return(
        <div className={"checkout__products__container"}>
            <div className={"checkout__products__container__sales"}>
                <h3>Nur noch 52 € bis zum kostenfreien Versand und 3 gratisproben</h3>
            </div>
            <div className={"checkout__products__container__products"}>
                {
                    data.map((e,i)=>{
                        return(
                            <div className={"checkout__products__container__products__body"} key={i}>
                               <CheckoutSingleProduct/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CheckoutProducts