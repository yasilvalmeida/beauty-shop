import { Drawer } from 'antd';
import { useState } from 'react';
import Dashboard from '../dashboard/Dashboard'

const MobileFilter = () => {
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
      {/*<button onClick={showDrawer}>FILTER</button>*/}
      <Drawer
        title='FILTER'
        className='mobileHeader__drawer__container'
        placement='left'
        closable={true}
        width={315}
        onClose={onClose}
        visible={visible}
        keyboard={true}
        maskClosable={true}
        onBlur={onClose}
      >
      <Dashboard />
      </Drawer>
    </div>
  );
};

export default MobileFilter;
