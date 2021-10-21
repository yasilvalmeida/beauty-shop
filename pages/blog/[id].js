import React from "react";
import BlogScene from "../../scenes/blog";
import axios from "axios";

const Blog = () => {
  return (
    <>
      <BlogScene />
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
