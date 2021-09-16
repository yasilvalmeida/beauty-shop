import { useEffect, useState } from "react";
import ProductsWithLeftText from "../../../shareable/Products/ProductsWithLeftText";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByCategory,
  addToWishList,
} from "../../../services/actions/products";

const FirstProducts = ({ getFour }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const { productsByCategory } = useSelector((state) => state?.products);
  const { productsWithLeftTextOneData } = useSelector(
    (state) => state?.landing
  );
  const authData = useSelector((state) => state.auth);
  const [leftText, setLeftText] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProductsByCategory(1, 3, 446, lang));
  }, [authData?.isAuthenticated, lang]);
  useEffect(() => {
    setProducts(productsByCategory);
  }, [productsByCategory]);

  return (
    <>
      <ProductsWithLeftText
        leftText={productsWithLeftTextOneData}
        products={products}
        addToWishList={addToWishList}
        getFour={getFour}
      />
    </>
  );
};

export default FirstProducts;
