import SearchBodyContainer from "./search-body-container/SearchBodyContainer";

const SearchBody = ({ word }) => {

  return (
    <div className="search__body">
      <div className="search__body__content">
        <SearchBodyContainer word={word} />
      </div>
    </div>
  );
};

export default SearchBody;
