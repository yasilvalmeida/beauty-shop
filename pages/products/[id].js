import React from "react";
import SingleProductScene from "../../scenes/single-product-scene";
import axios from "axios";

const ProductDetail = () => {
  return (
    <>
      <SingleProductScene />
    </>
  );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export async function getStaticPaths(params) {
  const plentyMarketLoginData = await axios
    .post(
      `${process.env.PLENTY_MARKET_API_URL}/login`,
      {
        username: process.env.PLENTY_MARKET_USERNAME,
        password: process.env.PLENTY_MARKET_PASSWORD,
      }
    );
  const { accessToken } = plentyMarketLoginData?.data;
  const initialItemsData =  await axios
    .get(
      `${process.env.PLENTY_MARKET_API_URL}/items?page=1&itemsPerPage=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  const { lastPageNumber, entries } = initialItemsData?.data;
  let initialId;
  await entries.map(async (product, i) => {
    const {
      id,
    } = product;
    initialId = id;
  });
  const finalItemsData = await axios.get(
    `${process.env.PLENTY_MARKET_API_URL}/items?page=${lastPageNumber}&itemsPerPage=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const finalEntries = finalItemsData?.data?.entries;
  let finalId;
  await finalEntries.map(async (product, i) => {
    const { id } = product;
    finalId = id;
  });
  const data = [];
  for (let i = initialId; i <= finalId; i++) {
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