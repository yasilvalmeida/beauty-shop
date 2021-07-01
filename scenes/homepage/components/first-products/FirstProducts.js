import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductsWithLeftText from "../../../../shareable/Products/PorductsWithLeftText";
import { getProducts, addToWishList ,getProductsWithFilter,getEightProductsWithFilter} from '../../../../services/actions/products';

const FirstProducts = ({getFour}) => {
    const dispatch = useDispatch();

    const prdcts = useSelector(state => state?.products?.products);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const authData = useSelector(state => state.auth);
    const [leftText, setLeftText] = useState({});

    useEffect(()=>{
        dispatch(getProducts());
    }, []);
    useEffect(()=>{
    },[prdcts])
    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HomePageOne'));
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