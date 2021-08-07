import { useState, useEffect } from "react";
import DashboardMenu from "./dashboard-menu/DashboardMenu";
import { getCategories } from "../../../../../services/actions/categories";
import { getManufactories } from "../../../../../services/actions/manufactories";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = ({
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  brand,
  category,
}) => {
  const navListState = useSelector((state) => state.navbar.navList);
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const categoriesData = [];
  navListState?.map((item, i) => {
    const filter =
      item.filter((detail) => detail.lang === lang)?.length > 0
        ? item.filter((detail) => detail.lang === lang)
        : item;
    const e = filter[0];
    const { categoryId, name } = e;
    categoriesData.push({ id: categoryId, name });
  });
  let manufactoriesData = useSelector(
    (state) => state.manufactory.manufactories
  );
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
        brand={brand}
        category={category}
      />
    </div>
  );
};

export default Dashboard;
