import {useState, useEffect} from "react";
import ProductsWithLeftText from "../../../../shareable/Products/PorductsWithLeftText";
import { addToWishList, getProductsTwo} from '../../../../services/actions/products';
import {useDispatch, useSelector} from "react-redux";

const SecondProducts = ({}) =>{
    const dispatch = useDispatch();

    const prdcts = useSelector(state => state?.products?.products2);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const [leftText, setLeftText] = useState({});
    useEffect(()=>{
        dispatch(getProductsTwo());
    }, []);

    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HomePageTwo'));
    }, [productsWithLeftText]);

    return(
        <>
            <ProductsWithLeftText
                products = {prdcts}
                leftText={leftText}
                addToWishList={addToWishList}
            />
        </>
    )
}

export default SecondProducts