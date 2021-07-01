import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";
import { getHeaderTexts } from '../../services/actions/homepage__stable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { headerText1, headerText2 } = useSelector(state => state.navbar);

  useEffect(() => {
    dispatch(getHeaderTexts());
  }, []);
  function firstTextFunction() {
    return {
      __html: headerText1
    };
  }
  function secondTextFunction() {
    return {
      __html: headerText2
    };
  }
  return (
    <>
      <header>
        <div className="page-header-top-black">
          <span className="col-lg-12" dangerouslySetInnerHTML={firstTextFunction()}>
          </span>
        </div>
        <div className="page-header-top-grey">
          <span className="col-lg-12" dangerouslySetInnerHTML={secondTextFunction()}>

          </span>
        </div>
        <HeaderSearch />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
