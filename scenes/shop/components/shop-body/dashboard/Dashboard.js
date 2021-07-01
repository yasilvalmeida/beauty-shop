import { useState } from 'react';
import DashboardMenu from './dashboard-menu/DashboardMenu';

const Dashboard = () => {
  const [value, setValue] = useState([]);

  const onChange = (e) => {
    // setValue([...value,e.target.value]);
  };
  
  function callback(key) {
    console.log(key);
  }
  const data = {
    titles: [
      { title: 'KATEGORIEN:' },
      { title: 'SHOP BY' },
      { title: 'MARKEN' },
      { title: 'WIRKSTOFFE' },
      { title: 'DUFT ANLASS' },
      { title: 'DUFTNOTEN' },
      { title: 'DUFTRICHTUNG' },
      { title: 'SONNENSCHUTZ' },
    ],
    category: [
      {
        name: 'ALLES',
      },
      {
        name: 'PERFUMS',
      },
      {
        name: 'BEAUTY',
      },
      {
        name: 'HARREN',
      },
      {
        name: 'INTERIERUR',
      },
      {
        name: 'ACCESSOIRES',
      },
    ],

  };
  
  return (
    <div className='dashboard__container'>
        <DashboardMenu
          onChange={onChange}
          value={value}
          callback={callback}
          data={data}
        />
    </div>
  );
};

export default Dashboard;
