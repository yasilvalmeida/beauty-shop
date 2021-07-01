import {useEffect, useState} from "react";
import ProductsWithLeftText from "../../../shareable/Products/PorductsWithLeftText";
import {useDispatch, useSelector} from "react-redux";
import {getProducts,addToWishList} from "../../../services/actions/products";

const FirstProducts = ({getFour}) =>{
    const dispatch = useDispatch();

    const prdcts = useSelector(state => state?.products?.products);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const authData = useSelector(state => state.auth);
    const [leftText, setLeftText] = useState({});
    useEffect(()=>{
        dispatch(getProducts(3));
    }, [authData?.isAuthenticated]);

    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HerrenPageOne'));
    }, [productsWithLeftText]);

    return(
        <>
            <ProductsWithLeftText
                leftText={leftText}
                products = {prdcts}
                addToWishList={addToWishList}
                getFour={getFour}
            />
        </>
    )
}


export default FirstProducts