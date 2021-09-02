import { Collapse } from "antd";
import DashboardMenuRadio from "./dashboard-menu-panel/DashboardMenuRadio";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardMenu = ({
  data,
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  brand,
  category,
  type
}) => {
  const lang = useSelector((state) => state.navbar.selectedLanguage);
  const { Panel } = Collapse;
  const [key, setKey] = useState(category ? 0 : brand ? 1 : "");
  useEffect(() => {
    if (category) {
      setKey(0);
    }
  }, [category]);

  useEffect(() => {
    if (brand) {
      setKey(1);
    }
  }, [brand]);
  return (
    <>
      {data?.titles.map((item, i) => (
        <Collapse
          expandIconPosition="right"
          defaultActiveKey={`${key}`}
          accordion
          ghost={true}
          key={`${i}-${lang}-${type}`}
        >
          <Panel
            header={`${item.title} (${item.data.length}):`}
            key={`${item.title}-${i}-${type}`}
          >
            <DashboardMenuRadio
              key={`${item.title}-${i}-${type}`}
              data={item.data}
              topic={item.title}
              setFilterType={setFilterType}
              setFilterId={setFilterId}
              maxItemAllowed={maxItemAllowed}
              setCurrent={setCurrent}
              current={current}
              scrollToref={scrollToref}
              brand={brand}
              category={category}
              type={type}
            />
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default DashboardMenu;
