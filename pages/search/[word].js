import React from "react";
import { useRouter } from "next/router";
import SearchScene from "../../scenes/search";

const SearchDetail = () => {
  const router = useRouter();
  const { word } = router.query;
  return (
    <>
      <SearchScene word={word} />
    </>
  );
};

export default SearchDetail;