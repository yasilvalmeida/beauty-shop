import { useState, useEffect } from "react";
import ProductsWithLeftText from "../../../../shareable/Products/ProductsWithLeftText";
import { addToWishList } from "../../../../services/actions/products";
import { useSelector } from "react-redux";

const SecondProducts = ({ products }) => {
  const { productsWithLeftTextTwoData } = useSelector(
    (state) => state?.landing
  );

  return (
    <>
      <ProductsWithLeftText
        products={products}
        leftText={productsWithLeftTextTwoData}
        addToWishList={addToWishList}
      />
    </>
  );
};

export default SecondProducts;
