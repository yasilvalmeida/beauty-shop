import ProductsWithFilter from "../../../shareable/ProductsWithFilter";
import {getProductsWithFilterSecond} from "../../../services/actions/products";

const ProductsWithFilterHarrenTwo = () =>{
    const headtext = "Männerpflege"
    const gridTemplateColumns = " repeat(auto-fit, minmax(40rem, 1fr))"
    const autoflow = "unset"
    const gap="30px"
    return(
        <>
            <ProductsWithFilter
                headtext={headtext}
                gridTemplateColumns={gridTemplateColumns} autoFlow ={autoflow} gap = {gap}
                position={"HerrenPageTwo"}
                getProductsWithFilter={getProductsWithFilterSecond}
            />
        </>
    )
}
export default ProductsWithFilterHarrenTwo