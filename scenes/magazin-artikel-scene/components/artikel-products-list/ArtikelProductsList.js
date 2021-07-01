import MagazinProducts from "../../../../shareable/Products/magazin-products/MagazinProducts";

const ProductsList = () =>{
    const products = [
        {id:0,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
        {id:1,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
        {id:2,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
        {id:3,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
    ]
    return(
        <div className={"artikel__products__body"}>
            <div className={"artikel__products__body__container"}>
                <h3 className={"artikel__products__body__container__text"}>Die essentials für den winter</h3>
                <div className={"artikel__products__body__container__items"}>
                    {products.map((e,i)=>{
                        return(
                            <div key={i}>
                                <MagazinProducts elem={e}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsList