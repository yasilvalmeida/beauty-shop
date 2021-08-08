import SearchBodyContainer from "./search-body-container/SearchBodyContainer";
import { useEffect, useState, useRef } from "react";

const SearchBody = ({word}) => {
  const scrollToref = useRef();
  
  return (
    <div className="search__body" ref={scrollToref}>
      <div className="search__body__content">
        <SearchBodyContainer
          word={word}
          scrollToref={scrollToref}
        />
      </div>
    </div>
  );
};

export default SearchBody;
