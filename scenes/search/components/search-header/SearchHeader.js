import { useSelector } from "react-redux";

const SearchHeader = ({ word }) => {
  const { searchPageTextData } = useSelector((state) => state.search);
  return (
    <div className="searchHeader__container">
      <div className="searchHeader__container__info">
        <span className="searchHeader__container__info--header">
          {searchPageTextData?.search}: {word}
        </span>
      </div>
    </div>
  );
};

export default SearchHeader;
