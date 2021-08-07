import {useEffect, useState} from "react";
import ProductsWithLeftText from "../../../shareable/Products/ProductsWithLeftText";
import {useDispatch, useSelector} from "react-redux";
import {getProducts,addToWishList} from "../../../services/actions/products";

const FirstProducts = ({getFour}) =>{
    const dispatch = useDispatch();
    const defaultLanguage = useSelector((state) => state?.navbar?.selectedLanguage);
    const prdcts = useSelector(state => state?.products?.products);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const authData = useSelector(state => state.auth);
    const [leftText, setLeftText] = useState({});
    const [products, setProducts] = useState([]);
    useEffect(() => {
      dispatch(getProducts(1, 3, defaultLanguage));
    }, [authData?.isAuthenticated, defaultLanguage]);
    useEffect(() => {
      setProducts(prdcts);
    }, [prdcts]);
    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HerrenPageOne'));
    }, [productsWithLeftText]);

    return(
        <>
            <ProductsWithLeftText
                leftText={leftText}
                products = {products}
                addToWishList={addToWishList}
                getFour={getFour}
            />
        </>
    )
}


export default FirstProducts