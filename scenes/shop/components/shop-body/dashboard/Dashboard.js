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
  let manufactoriesState = useSelector(
    (state) => state.manufactory.manufactories
  );
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const categories = [];
  const manufactories = manufactoriesState;
  categories.unshift({
    id: 0,
    name: "Keiner",
  });
  navListState?.map((item, i) => {
    const filter =
      item.filter((detail) => detail.lang === lang)?.length > 0
        ? item.filter((detail) => detail.lang === lang)
        : item;
    const e = filter[0];
    const { categoryId, name } = e;
    if (
      name !== "Typentest" &&
      name !== "Video" &&
      name !== "Showroom" &&
      name !== "Magazin" &&
      name !== "Kontakt"
    ) {
      categories.push({ id: categoryId, name });
    }
  });

  useEffect(() => {
    manufactories.unshift({
      id: 0,
      name: "Keiner",
    });
  }, [manufactoriesState]);

  const data = {
    titles: [
      { title: "KATEGORIEN", data: categories },
      /* { title: "SHOP BY", data: [] }, */
      { title: "MARKEN", data: manufactories },
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
