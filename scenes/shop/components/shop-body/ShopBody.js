import Dashboard from './dashboard/Dashboard';
import MobileFilter from './mobile-filter/MobileFilter';
import ShopBodyContainer from './shop-body-container/ShopBodyContainer';
import ShopBodyHeader from './shop-body-header/ShopBodyHeader';
import { useEffect, useState, useRef } from "react";

const ShopBody = ({ brand, category }) => {
  const [sortByPrice, setSortByPrice] = useState("PRIES");
  const [sortByName, setSortByName] = useState("NAME");
  const [sortByNew, setSortByNew] = useState("blank");
  const [selected, setSelected] = useState("");
  const [filterType, setFilterType] = useState(
    brand ? "MARKEN" : category ? "KATEGORIEN" : null
  );
  const [filterId, setFilterId] = useState(
    brand ? brand : category ? category : 0
  );
  const [current, setCurrent] = useState(1);
  const maxItemAllowed = 9;
  const scrollToref = useRef();
  useEffect(() => {
    setSortByName("NAME");
    setSortByNew("blank");
  }, [sortByPrice]);

  useEffect(() => {
    setSortByPrice("PRIES");
    setSortByNew("blank");
  }, [sortByName]);

  useEffect(() => {
    if (category) {
      setFilterId(category);
      setFilterType("KATEGORIEN");
    }
  }, [category]);

  useEffect(() => {
    if (brand) {
      setFilterId(brand);
      setFilterType("MARKEN");
    }
  }, [brand]);

  return (
    <div className="shop__body" ref={scrollToref}>
      <ShopBodyHeader setSelected={setSelected} />
      <div className="shop__body__content">
        <Dashboard
          setFilterType={setFilterType}
          setFilterId={setFilterId}
          maxItemAllowed={maxItemAllowed}
          setCurrent={setCurrent}
          current={current}
          scrollToref={scrollToref}
          brand={brand}
          category={category}
        />
        <MobileFilter />
        <ShopBodyContainer
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

export default ShopBody;
