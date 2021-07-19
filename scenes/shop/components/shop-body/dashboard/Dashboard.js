import { useState, useEffect } from 'react';
import DashboardMenu from './dashboard-menu/DashboardMenu';
import {
  getCategories
} from "../../../../../services/actions/categories";
import { getManufactories } from "../../../../../services/actions/manufactories";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = ({
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  }) => {
  const dispatch = useDispatch();
  let categoriesData = useSelector((state) => state.category.categories);
  let manufactoriesData = useSelector((state) => state.manufactory.manufactories);

  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [manufactoriesLoaded, setManufactoriesLoaded] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, [categoriesLoaded]);

  useEffect(() => {
    dispatch(getManufactories());
  }, [manufactoriesLoaded]);

  const data = {
    titles: [
      { title: "KATEGORIEN", data: categoriesData },
      /* { title: "SHOP BY", data: [] }, */
      { title: "MARKEN", data: manufactoriesData },
      /* { title: "WIRKSTOFFE", data: [] },
      { title: "DUFT ANLASS", data: [] },
      { title: "DUFTNOTEN", data: [] },
      { title: "DUFTRICHTUNG", data: [] },
      { title: "SONNENSCHUTZ", data: [] }, */
    ],
  };

  return (
    <div className="dashboard__container">
      <DashboardMenu
        data={data}
        setFilterType={setFilterType}
        setFilterId={setFilterId}
        maxItemAllowed={maxItemAllowed}
        setCurrent={setCurrent}
        current={current}
        scrollToref={scrollToref}
      />
    </div>
  );
};

export default Dashboard; 
