import {useSelector} from "react-redux";

const ShopDescription = () => {
  const text= useSelector(({ news }) => news.shopPageLg);
  return (
      <div className='shop__description'>
        <h5 className='shop__description--title'>
          {text[0]?.header}
        </h5>
        <p className='shop__description--text'>
          {text[0]?.text}
        </p>
      </div>
  );
};

export default ShopDescription;
