import React from "react";
import SingleBrandScene from "../../scenes/single-brand-scene";

const ProductDetail = () => {
  return (
    <>
      <SingleBrandScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths(params) {
  const data = [...Array(1000).keys()];
  return {
    paths: data?.map((e) => {
      return {
        params: { brandId: `${e}` },
      };
    }),
    fallback: false,
  };
}

export default ProductDetail;
