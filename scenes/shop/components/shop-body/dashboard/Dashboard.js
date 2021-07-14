import { useState, useEffect } from 'react';
import DashboardMenu from './dashboard-menu/DashboardMenu';
import {
  getCategories
} from "../../../../../services/actions/categories";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  let categoriesData = useSelector((state) => state.category.categories);

  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  /* 
  const [value, setValue] = useState([]);
  const onChange = (e) => {
    setValue([...value, e.target.value]);
    //console.log('onChange', value);
  };
  
  function callback(key) {
    console.log(key);
  } */

  useEffect(() => {
    dispatch(getCategories());
  }, [categoriesLoaded]);

  const data = {
    titles: [
      { title: "KATEGORIEN", data: categoriesData },
      { title: "SHOP BY", data: [] },
      { title: "MARKEN", data: [] },
      { title: "WIRKSTOFFE", data: [] },
      { title: "DUFT ANLASS", data: [] },
      { title: "DUFTNOTEN", data: [] },
      { title: "DUFTRICHTUNG", data: [] },
      { title: "SONNENSCHUTZ", data: [] },
    ],
  };

  return (
    <div className="dashboard__container">
      <DashboardMenu data={data} />
    </div>
  );
};

export default Dashboard;
