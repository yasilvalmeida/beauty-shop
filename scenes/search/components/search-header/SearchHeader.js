const SearchHeader = ({word}) => {
  return (
    <div className='searchHeader__container'>
      <div className='searchHeader__container__info'>
        <span className='searchHeader__container__info--header'>
          Search For: {word}
        </span>
      </div>
    </div>
  );
};

export default SearchHeader;
