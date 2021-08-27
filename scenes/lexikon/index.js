import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import HeadTextLexikon from "./components/head-text/HeadTextLexikon";
import LexikonFilter from "./components/lexikon-filter/LexikonFilter";
import LexikonCollapse from "./components/collapse/LexikonCollapse";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { Space, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  getLexikonPageText,
  getLexikonThemes,
} from "../../services/actions/lexikon";

const LexikonScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { lexikonThemeLoading, lexikonThemeData } = useSelector(
    (state) => state.lexikon
  );
  const [theme, setTheme] = useState(
    lexikonThemeData?.length > 0 ? lexikonThemeData[0]?.theme : ""
  );
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getLexikonPageText(lang));
    dispatch(getLexikonThemes(lang));
  }, [lang]);
  const handleChange = (value) => {
    setTheme(value);
  };
  return (
    <>
      <PageHeader />
      <MobileHeader />
      {lexikonThemeLoading ? (
        <div className={"loader__body"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <div className={"lexikon__body__for__all"}>
          <HeadTextLexikon />
          <LexikonFilter handleChange={handleChange} />
          <LexikonCollapse theme={theme} />
          <NewsletterRep />
        </div>
      )}
      <Footer />
    </>
  );
};

export default LexikonScene;
