import { Collapse } from 'antd';
import DashboardMenuRadio from './dashboard-menu-panel/DashboardMenuRadio';

const DashboardMenu = ({ data }) => {
  const { Panel } = Collapse;
  return (
    <>
      {data?.titles.map((item, i) => (
        <Collapse expandIconPosition="right" ghost="true" key={i}>
          <Panel key={i} header={`${item.title} (${item.data.length}):`}>
            <DashboardMenuRadio data={item.data} key={i} />
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default DashboardMenu;
