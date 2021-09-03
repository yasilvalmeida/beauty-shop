import { useSelector } from "react-redux";

const SearchHeaderMobile = ({ word }) => {
  const { searchPageTextData } = useSelector((state) => state.search);
  return (
    <div className="searchHeader__container__mobile">
      <div className="searchHeader__container__info">
        <span className="searchHeader__container__info--header">
          {searchPageTextData?.search}: {word}
        </span>
      </div>
    </div>
  );
};

export default SearchHeaderMobile;
