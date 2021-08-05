import SearchHeader from './components/search-header/SearchHeader';
import SearchHeaderMobile from './components/search-header/SearchHeaderMobile';
import SearchBody from "./components/search-body/SearchBody";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNewsReport, getShopLgText} from "../../services/actions/news";
import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import {Space, Spin} from "antd";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const SearchScene = ({word}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getNewsReport());
    dispatch(getShopLgText());
  }, []);
  const headLoaded = useSelector((state) => state.news.newsReportLoading);
  return (
    <>
      {!headLoaded ? (
        <>
          <PageHeader />
          <MobileHeader />
          <div className={"shop-all-elements"}>
            <SearchHeader word={word} />
            <SearchHeaderMobile word={word} />
            <SearchBody />
          </div>
          <Footer />
        </>
      ) : (
        <div className={"loader__body"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      )}
    </>
  );
};

export default SearchScene;
