import {useSelector} from "react-redux";

const SearchDescription = () => {
  const text = useSelector(({ news }) => news.shopPageLg);
  console.log('text', text);
  return (
    <div className="search__description">
      <h5 className="search__description--title">{text[0]?.header}</h5>
    </div>
  );
};

export default SearchDescription;
