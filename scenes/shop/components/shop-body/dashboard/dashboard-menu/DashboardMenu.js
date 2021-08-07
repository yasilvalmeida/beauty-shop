import { Collapse } from 'antd';
import DashboardMenuRadio from './dashboard-menu-panel/DashboardMenuRadio';
import { useState, useEffect } from "react";

const DashboardMenu = ({
  data,
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  brand, 
  category
}) => {
  const { Panel } = Collapse;
  const [key, setKey] = useState(category ? 0 : brand ? 1 : "");
  useEffect(() => {
    if (category) {
      setKey(0);
      console.log('aux', key)
    }
  }, [category]);

  useEffect(() => {
    if (brand) {
      setKey(1);
      console.log("aux", key);
    }
  }, [brand]);
  return (
    <>
      {data?.titles.map((item, i) => (
        <Collapse
          expandIconPosition="right"
          defaultActiveKey={`${key}`}
          accordion
          ghost="true"
          key={i}
        >
          <Panel key={i} header={`${item.title} (${item.data.length}):`}>
            <DashboardMenuRadio
              data={item.data}
              topic={item.title}
              key={i}
              setFilterType={setFilterType}
              setFilterId={setFilterId}
              maxItemAllowed={maxItemAllowed}
              setCurrent={setCurrent}
              current={current}
              scrollToref={scrollToref}
              brand={brand}
              category={category}
            />
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default DashboardMenu;
