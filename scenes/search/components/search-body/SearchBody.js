import SearchBodyContainer from "./search-body-container/SearchBodyContainer";
import { useEffect, useState, useRef } from "react";

const SearchBody = () => {
  const [sortByPrice, setSortByPrice] = useState("PRIES");
  const [sortByName, setSortByName] = useState("NAME");
  const [sortByNew, setSortByNew] = useState("blank");
  const [selected, setSelected] = useState("");
  const [filterType, setFilterType] = useState(null);
  const [filterId, setFilterId] = useState(0);
  const [current, setCurrent] = useState(1);
  const maxItemAllowed = 22;
  const scrollToref = useRef();
  useEffect(() => {
    setSortByName("NAME");
    setSortByNew("blank");
  }, [sortByPrice]);

  useEffect(() => {
    setSortByPrice("PRIES");
    setSortByNew("blank");
  }, [sortByName]);

  return (
    <div className="search__body" ref={scrollToref}>
      <div className="search__body__content">
        <SearchBodyContainer
          selected={selected}
          filterType={filterType}
          filterId={filterId}
          maxItemAllowed={maxItemAllowed}
          setCurrent={setCurrent}
          current={current}
          scrollToref={scrollToref}
        />
      </div>
    </div>
  );
};

export default SearchBody;
