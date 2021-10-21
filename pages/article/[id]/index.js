import React from "react";
import ArticleScene from "../../../scenes/article";

const Blog = () => {
  return (
    <>
      <ArticleScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths(params) {
  const data = [...Array(10000).keys()];
  data.unshift('gallery');
  return {
    paths: data?.map((e) => {
      return {
        params: { id: `${e}` },
      };
    }),
    fallback: false,
  };
}

export default Blog;
