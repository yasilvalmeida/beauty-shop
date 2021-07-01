import ProductsWithFilter from '../../../../shareable/ProductsWithFilter';
import {getProducts, getProductsWithFilter} from "../../../../services/actions/products";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ProductsWithLeftText from "../../../../shareable/Products/PorductsWithLeftText";
import ProductsWithFilterHomepage from "../../../homepage/components/products-with-filter/ProductsWithFilter";

const ErrorPageProducts = () => {
    const headtext = 'Männerpflege';
    // const authData = useSelector(state => state.auth);
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getProductsWithFilter());
    //     // dispatch(getProducts())
    // }, [authData?.isAuthenticated]);
    return (
        <>
            {/*<ProductsWithFilterHomepage/>*/}
            <div className='product__with__filter'>
                <ProductsWithFilter
                    headtext={headtext}
                    position={"NotFoundPage"}
                    getProductsWithFilter={getProductsWithFilter}
                />
            </div>
        </>
    );
};

export default ErrorPageProducts;
