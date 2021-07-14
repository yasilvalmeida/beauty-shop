import React from "react";
import SingleProductScene from "../../scenes/single-product-scene";

const ProductDetail = () => {
  return (
    <>
      <SingleProductScene/>
    </>
  );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export async function getStaticPaths(params) {
  const max = 3000;
  const data = [];
  for (let i = 1; i <= max; i++) {
    data.push(i);
  }
  return {
    paths: data.map((e) => {
      return {
        params: { id: `${e}` },
      };
    }),
    fallback: false,
  };
}

export default ProductDetail;
