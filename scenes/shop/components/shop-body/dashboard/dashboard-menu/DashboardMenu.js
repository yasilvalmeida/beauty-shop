import { Collapse } from 'antd';
import DashboardMenuRadio from './dashboard-menu-panel/DashboardMenuRadio';

const DashboardMenu = ({ onChange, callback, value, data }) => {
  const { Panel } = Collapse;
  return (
    <>
      {data.titles.map((item,i) => (
        <Collapse
          onChange={callback}
          expandIconPosition='right'
          ghost='true'
          key={i}
          
        >
          <Panel key={i} header={item.title} >
            <DashboardMenuRadio
              onChange={onChange}
              value={value}
              data={data.category}
              key={i}
            />
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default DashboardMenu;
