import { useSelector } from "react-redux";
import ProductsWithLeftText from "../../../../shareable/Products/ProductsWithLeftText";
import { addToWishList } from "../../../../services/actions/products";

const FirstProducts = ({ products }) => {
  const { productsWithLeftTextOneData } = useSelector(
    (state) => state?.landing
  );

  return (
    <>
      <ProductsWithLeftText
        leftText={productsWithLeftTextOneData}
        products={products}
        addToWishList={addToWishList}
      />
    </>
  );
};

export default FirstProducts;
