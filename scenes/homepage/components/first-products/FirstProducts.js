import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductsWithLeftText from "../../../../shareable/Products/ProductsWithLeftText";
import {
  getFirstThreeProducts,
  addToWishList,
} from "../../../../services/actions/products";

const FirstProducts = ({getFour}) => {
    const dispatch = useDispatch();

    const prdcts = useSelector(state => state?.products?.firstThreeProducts);
    const productsWithLeftText = useSelector(state => state?.products?.productsWithLeftText);
    const authData = useSelector(state => state.auth);
    const [leftText, setLeftText] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(getFirstThreeProducts());
    }, []);
    useEffect(() => {
        setProducts(prdcts);
    },[prdcts]);  
    useEffect(() => {
        setLeftText(productsWithLeftText.find(pr => pr.position === 'HomePageOne'));
    }, [productsWithLeftText]);

    return (
      <>
        <ProductsWithLeftText
            leftText={leftText}
            products={products}
            addToWishList={addToWishList}
        />
      </>
    );
}

export default FirstProducts