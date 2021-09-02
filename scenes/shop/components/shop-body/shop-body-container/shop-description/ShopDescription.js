import { useSelector } from "react-redux";

const ShopDescription = () => {
  const { shopPageTextData } = useSelector((state) => state.shop);
  return (
    <div className="shop__description">
      <h5 className="shop__description--title">
        {shopPageTextData?.bottom_header}
      </h5>
      <p className="shop__description--text">{shopPageTextData?.bottom_text}</p>
    </div>
  );
};

export default ShopDescription;
