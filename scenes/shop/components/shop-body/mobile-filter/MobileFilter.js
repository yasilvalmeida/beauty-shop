import { Drawer } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../dashboard/Dashboard";

const MobileFilter = ({
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  brand,
  category,
}) => {
  const { shopPageTextData } = useSelector((state) => state.shop);
  const [visible, setVisible] = useState(false);

  const data = [{}];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <span className="filter-button" onClick={showDrawer}>
        <FontAwesomeIcon icon={faFilter} className={"head-search-icon"} />{" "}
        {shopPageTextData?.filter}
      </span>
      <Drawer
        title="FILTER"
        className="mobileHeader__drawer__container"
        placement="left"
        closable={true}
        width={315}
        onClose={onClose}
        visible={visible}
        keyboard={true}
        maskClosable={true}
      >
        <Dashboard
          setFilterType={setFilterType}
          setFilterId={setFilterId}
          maxItemAllowed={maxItemAllowed}
          setCurrent={setCurrent}
          current={current}
          scrollToref={scrollToref}
          brand={brand}
          category={category}
          type={"mobile"}
        />
      </Drawer>
    </div>
  );
};

export default MobileFilter;
