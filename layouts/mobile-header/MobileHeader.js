import { useEffect, useState, useCallback } from "react";
import {
  MenuOutlined,
  SearchOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Drawer, Input, Radio, Space } from "antd";
import MobileCard from "./MobileCard";
import MobileMenuFooter from "./MobileMenuFooter";
import Logo from "../logo/Logo";
import Image from "next/image";
import CartSidebar from "../cartSidebar/CartSidebar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { getBasketData } from "../../services/actions/basket";
import { setSelectedLanguage } from "../../services/actions/header";
import Loader from "../../shareable/Loader";

const MobileHeader = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleCart, setVisibleCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const navListState = useSelector((state) => state.navbar.navList);
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const [navList, setNavList] = useState([]);
  const [languages, setLanguages] = useState([
    { id: 1, name: "de", active: true },
    { id: 2, name: "en", active: false },
    { id: 3, name: "fr", active: false },
  ]);
  const [language, setLanguage] = useState(languages[0]?.name);

  const showDrawer = () => {
    setVisible(true);
  };
  const showDrawerCart = () => {
    setVisibleCart(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onCloseCart = () => {
    setVisibleCart(false);
  };
  const openSearch = () => {
    setShowTranslation(false);
    setShowSearch(!showSearch);
  };
  const openTranslation = () => {
    setShowSearch(false);
    setShowTranslation(!showTranslation);
  }
  const onChange = useCallback(
    (e) => {
      console.log("radio checked", e.target.value);
      setLanguage(e.target.value);
      setLanguages((prev) =>
        prev.map((lng) => {
          lng.active = false;
          if (lng.name === e.target.value) {
            lng.active = true;
            dispatch(setSelectedLanguage(lng?.name?.toLowerCase()));
          }
          return lng;
        })
      );
    },
    [languages]
  );
  useEffect(() => {
    if (visibleCart) {
      dispatch(getBasketData());
    }
  }, [visibleCart]);
 
  useEffect(() => {
    const mainCategories = [];
    navListState?.map((elem, i) => {
      const filters =
        elem.filter((detail) => detail.lang === lang)?.length > 0
          ? elem.filter((detail) => detail.lang === lang)
          : elem;
      const filtered = filters[0];
      const { categoryId, name, categories } = filtered;
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
      if (categoryId === 444) url = "marken";
      if (categoryId === 446) url = "herren";
      const e = {
        id: categoryId,
        name,
        url,
        categories,
      };
      mainCategories.push(e);
    });
    setNavList(mainCategories);
  }, [navListState, lang]);

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 26,
        color: "#7b7b7b",
      }}
    />
  );

  return (
    <div className="mobileHeader">
      <div className="mobileHeader__container">
        <div className="mobileHeader__container__icon--menu">
          {navList?.length === 0 ? (
            <Loader type={"component"} />
          ) : (
            <MenuOutlined onClick={showDrawer} />
          )}
        </div>
        <Logo />
        <div className="mobileHeader__container__image--cart">
          <TranslationOutlined onClick={openTranslation} />
          <SearchOutlined onClick={openSearch} />
          <div onClick={showDrawerCart} style={{ cursor: "pointer" }}>
            <Image src="/bag.svg" width={30} height={30} />
          </div>
        </div>
      </div>
      <div
        className={
          showTranslation ? "mobileHeader__translation__container" : "hide"
        }
      >
        <Radio.Group onChange={onChange} value={language} buttonStyle="solid">
          <Space direction="horizontal">
            {languages.map((lng, idx) => (
              <Radio.Button
                value={lng.name}
                key={idx}
                checked={lng.active ? true : false}
                style={{ background: "#ccc", borderColor: "black" }}
              >
                {lng.name}
              </Radio.Button>
            ))}
          </Space>
        </Radio.Group>
      </div>
      <div className={showSearch ? "mobileHeader__search__container" : "hide"}>
        <Input
          placeholder="suche"
          className="mobileHeader__search__container--input"
          prefix={prefix}
        />
      </div>
      <Drawer
        title={<Logo />}
        className="mobileHeader__drawer__container"
        placement="left"
        closable={true}
        width={315}
        onClose={onClose}
        visible={visible}
        keyboard={true}
        maskClosable={true}
      >
        {navList?.map((e, i) => {
          return (
            <MobileCard
              title={<Link href={`/${e?.url}`}>{e?.name}</Link>}
              data={e}
              key={`${e?.url}-${i}`}
              classValue="without-body"
            />
          );
        })}
        <MobileMenuFooter />
      </Drawer>
      <CartSidebar onClose={onCloseCart} visible={visibleCart} />
    </div>
  );
};

export default MobileHeader;
