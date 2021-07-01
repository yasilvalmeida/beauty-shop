import MagazinProductsWhite from "../../../../shareable/Products/magazin-products/MagazinWhiteProducts";

const ArtikelTwoProducts = () =>{
    const products = [
        {id:0,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
        {id:1,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
        {id:2,nohovertext1:"Places to go", nohovertext2:"Lorem ipsum dolor sit amet,consectetur adipisicing elit. Blanditiis, commodi, suscipit.", name:"Ylumi", type:"energy kapseln", type2:"kapseln", price:"28,00 €", image:"/item.png"},
    ]
    return(
        <div className={"magaz__artikel__two__products__container"}>
            {products.map((e,i)=>{
                return(
                    <div key={i} className={"productdivmartop"}>
                        <MagazinProductsWhite elem={e}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ArtikelTwoProducts