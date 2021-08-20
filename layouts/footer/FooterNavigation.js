import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FooterNavigation = ({
  footerContact,
  footerHeader,
  footerDPAB,
  footerMainMenu,
}) => {
  const navListState = useSelector((state) => state.navbar.navList);
  const lang = useSelector((state) => state?.header?.headerLanguage);
  const [navList, setNavList] = useState([]);
  const manufactoryState = useSelector(
    (state) => state.manufactory.manufactories
  );

  useEffect(() => {
    const mainCategories = [];
    const manufactories = manufactoryState;
    navListState?.map((elem, i) => {
      const filters =
        elem.filter((detail) => detail.lang === lang)?.length > 0
          ? elem.filter((detail) => detail.lang === lang)
          : elem;
      const filtered = filters[0];
      let { categoryId, name, categories } = filtered;
      let url = "";
      switch (name) {
        case "Typentest":
        case "Type Test":
          url = "typentest/step1";
          break;
        case "Video":
          url = "video";
          break;
        case "Showroom":
          url = "shop";
          break;
        case "Magazin":
        case "Magazine":
          url = "magazine";
          break;
        case "Kontakt":
        case "Contact":
          url = "contact";
          break;
        default:
          url = `shop?category=${categoryId}`;
      }
      if (categoryId === 444) {
        url = "marken";
        categories = manufactories;
      }
      const e = {
        id: categoryId,
        name,
        url,
        categories,
      };
      mainCategories.push(e);
    });
    setNavList(mainCategories);
  }, [navListState, manufactoryState, lang]);

  return (
    <div className={"footer__navigation__container"}>
      <div className={"footer__navigation__container__body"}>
        <div className={"footer__navigation__container__body__item"}>
          <h2>{footerHeader?.contact}</h2>
          <p>{footerContact?.text_one}</p>
          <p>{footerContact?.text_two}</p>
          <p>
            <a href={`mailto:${footerContact?.email_value}`}>
              {footerContact?.email} {footerContact?.email_value}
            </a>
          </p>
          <p>
            <a href={`tel:${footerContact?.phone_value}`}>
              {footerContact?.phone} {footerContact?.phone_value}
            </a>
          </p>
        </div>
        <div className={"footer__navigation__container__body__item1"}>
          <h2>{footerHeader?.store}</h2>
          <p>{footerDPAB?.text_one}</p>
          <p>{footerDPAB?.text_two}</p>
        </div>
        <div className={"footer__navigation__container__body__item2"}>
          <h2>{footerHeader?.online_shop}</h2>
          {navList?.map((e, i) => {
            return (
              <li key={i}>
                <Link exact href={`/${e?.url}`}>
                  <a>{e?.name}</a>
                </Link>
              </li>
            );
          })}
        </div>
        <div className={"footer__navigation__container__body__item3"}>
          <h2>{footerHeader?.main_account}</h2>
          <ul>
            {footerMainMenu?.map((e, i) => {
              return (
                <li key={i}>
                  <Link exact href={e?.url}>
                    <a>{e?.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
