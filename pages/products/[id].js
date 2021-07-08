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
        props:{}
    };
}


export async function getStaticPaths(params) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`,

    )
    const data = await res.json()
    console.log(data)
    return {
        paths: data.map(e=>{
            return{
                params:{id:`${e.id}`}
            }
        }),
        fallback:false

    };
}


export default ProductDetail;
