import {useState, useEffect} from "react";
import ProductsWithLeftText from "../../../../shareable/Products/ProductsWithLeftText";
import { addToWishList, getSecondThreeProducts} from '../../../../services/actions/products';
import {useDispatch, useSelector} from "react-redux";

const SecondProducts = ({}) =>{
    const dispatch = useDispatch();

    const prdcts = useSelector(state => state?.products?.secondThreeProducts);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const [leftText, setLeftText] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        dispatch(getSecondThreeProducts());
    }, []);

    useEffect(() => {
      setProducts(prdcts);
    }, [prdcts]);

    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HomePageTwo'));
    }, [productsWithLeftText]);

    return(
        <>
            <ProductsWithLeftText
                products = {products}
                leftText={leftText}
                addToWishList={addToWishList}
            />
        </>
    )
}

export default SecondProducts