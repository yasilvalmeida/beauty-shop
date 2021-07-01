import Products from "./products/Products";

const AboutTwoProducts = ({products}) =>{
    return(
        <>
            <div className="about-products-body">
                <div className='about-products-title'>
                    <p>Meine Lieblingsprodukte</p>
                </div>
                <div className="about-products-list-body">
                    <Products products={products}/>
                </div>
            </div>
        </>
    )
}
 export default AboutTwoProducts