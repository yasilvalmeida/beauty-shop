import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";
import {
  getHeaderTexts,
  getHeaderContact,
  setSelectedLanguage,
  getHeaderPageText,
} from "../../services/actions/header";
import { getBasketData } from "../../services/actions/basket";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { headerText, headerLanguage, headerContact, headerPageText } =
    useSelector((state) => state.header);

  useEffect(() => {
    dispatch(getHeaderTexts(headerLanguage));
    dispatch(getHeaderPageText(headerLanguage));
  }, [headerLanguage]);
  useEffect(() => {
    dispatch(getHeaderContact());
    dispatch(getUserDataFromLocalStorage());
    dispatch(setSelectedLanguage("de"));
    //dispatch(getBasketData());
  }, []);
  function firstTextFunction() {
    return {
      __html: headerText?.length > 0 ? headerText[0]?.describe_HTML_CSS : "",
    };
  }
  function secondTextFunction() {
    return {
      __html: headerText?.length > 1 ? headerText[1]?.describe_HTML_CSS : "",
    };
  }
  return (
    <>
      <header>
        <div className="page-header-top-black row">
          <div className="col-sm-12">
            <span dangerouslySetInnerHTML={firstTextFunction()}></span>
          </div>
        </div>
        <div className="page-header-top-grey">
          <span
            className="col-sm-12"
            dangerouslySetInnerHTML={secondTextFunction()}
          ></span>
        </div>
        <HeaderSearch
          headerLanguage={headerLanguage}
          headerContact={headerContact}
          headerPageText={headerPageText}
        />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
