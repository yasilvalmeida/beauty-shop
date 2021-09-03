import { useEffect } from "react";
import DashboardMenu from "./dashboard-menu/DashboardMenu";
import { useSelector } from "react-redux";

const Dashboard = ({
  setFilterType,
  setFilterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
  brand,
  category,
  type,
}) => {
  const navListState = useSelector((state) => state.navbar.navList);
  let manufactoriesState = useSelector(
    (state) => state.manufactory.manufactories
  );
  const lang = useSelector((state) => state.navbar.selectedLanguage);
  const { shopPageTextData } = useSelector((state) => state.shop);
  const categories = [];
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

  const data = {
    titles: [
      {
        title: shopPageTextData?.category || "KATEGORIEN",
        data: [
          {
            id: 0,
            name: "Keiner",
          },
          ...categories,
        ],
      },
      /* { title: "SHOP BY", data: [] }, */
      {
        title: shopPageTextData?.brand || "MARKEN",
        data: [
          {
            id: 0,
            name: "Keiner",
          },
          ...manufactoriesState,
        ],
      },
      /* { title: "WIRKSTOFFE", data: [] },
      { title: "DUFT ANLASS", data: [] },
      { title: "DUFTNOTEN", data: [] },
      { title: "DUFTRICHTUNG", data: [] },
      { title: "SONNENSCHUTZ", data: [] }, */
    ],
  };

  return (
    <>
      <div className={`dashboard__${type}__container`}>
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
          type={type}
        />
      </div>
    </>
  );
};

export default Dashboard;
