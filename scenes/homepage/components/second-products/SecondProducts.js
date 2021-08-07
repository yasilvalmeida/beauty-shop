import {useState, useEffect} from "react";
import ProductsWithLeftText from "../../../../shareable/Products/ProductsWithLeftText";
import { addToWishList } from '../../../../services/actions/products';
import {useSelector} from "react-redux";

const SecondProducts = ({ products }) => {
  const productsWithLeftText = useSelector(
    (state) => state?.products?.productsWithLeftText
  );
  const [leftText, setLeftText] = useState({});

  useEffect(() => {
    setLeftText(
      productsWithLeftText.find((pr) => pr.position === "HomePageTwo")
    );
  }, [productsWithLeftText]);

  return (
    <>
      <ProductsWithLeftText
        products={products}
        leftText={leftText}
        addToWishList={addToWishList}
      />
    </>
  );
};

export default SecondProducts