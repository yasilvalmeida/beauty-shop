import Dashboard from './dashboard/Dashboard';
import MobileFilter from './mobile-filter/MobileFilter';
import ShopBodyContainer from './shop-body-container/ShopBodyContainer';
import ShopBodyHeader from './shop-body-header/ShopBodyHeader';
import { useEffect, useState, useRef } from "react";

const ShopBody = () => {

    const [sortByPrice, setSortByPrice] = useState("PRIES");
    const [sortByName, setSortByName] = useState("NAME");
    const [sortByNew, setSortByNew] = useState("blank");
    const [selected, setSelected] = useState("");
    const [filterType, setFilterType] = useState(null);
    const [filterId, setFilterId] = useState(0);
    const [current, setCurrent] = useState(1);
    const maxItemAllowed = 22;
    const scrollToref = useRef();
    useEffect(()=>{
        setSortByName("NAME")
        setSortByNew("blank")
    },[sortByPrice])

    useEffect(()=>{
        setSortByPrice("PRIES")
        setSortByNew("blank")
    },[sortByName])

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
