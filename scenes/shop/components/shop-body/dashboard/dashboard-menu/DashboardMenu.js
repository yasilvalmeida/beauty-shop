import { Collapse } from 'antd';
import DashboardMenuRadio from './dashboard-menu-panel/DashboardMenuRadio';

const DashboardMenu = ({
  data,
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
}) => {
  const { Panel } = Collapse;
  return (
    <>
      {data?.titles.map((item, i) => (
        <Collapse expandIconPosition="right" ghost="true" key={i}>
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
            />
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default DashboardMenu;
