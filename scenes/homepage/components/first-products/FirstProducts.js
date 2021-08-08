import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductsWithLeftText from "../../../../shareable/Products/ProductsWithLeftText";
import { addToWishList } from "../../../../services/actions/products";

const FirstProducts = ({ products }) => {
  const productsWithLeftText = useSelector(
    (state) => state?.products?.productsWithLeftText
  );
  const authData = useSelector((state) => state.auth);
  const [leftText, setLeftText] = useState({});

  useEffect(() => {
    setLeftText(
      productsWithLeftText.find((pr) => pr.position === "HomePageOne")
    );
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
};

export default FirstProducts;
