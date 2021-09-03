import SearchHeader from "./components/search-header/SearchHeader";
import SearchHeaderMobile from "./components/search-header/SearchHeaderMobile";
import SearchBody from "./components/search-body/SearchBody";
import Loader from "../../shareable/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchPageText } from "../../services/actions/search";
import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";

const SearchScene = ({ word }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { searchPageTextData, searchPageTextLoading } = useSelector(
    (state) => state.search
  );
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getSearchPageText(lang));
  }, [lang]);
  return (
    <>
      <PageHeader />
      <MobileHeader />
      {searchPageTextLoading ? (
        <Loader type="component" />
      ) : (
        <>
          <div className={"shop-all-elements"}>
            <SearchHeader word={word} />
            <SearchHeaderMobile word={word} />
            <SearchBody word={word} />
            <br />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default SearchScene;
