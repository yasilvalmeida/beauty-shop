import MagazinProducts from "../../../../shareable/Products/magazin-products/MagazinProducts";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ProductsList = () => {
  const { magazinePageTextData, magazineSingleArticleData } = useSelector(
    (state) => state.magazine
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const { magazine_products } = magazineSingleArticleData || [];
    setProducts(magazine_products);
  }, [magazineSingleArticleData]);
  return (
    <div className={"artikel__products__body"}>
      <div className={"artikel__products__body__container"}>
        <h3 className={"artikel__products__body__container__text"}>
          {magazinePageTextData?.product_list_header}
        </h3>
        <div className={"artikel__products__body__container__items"}>
          {products?.length > 0 &&
            products?.map((e, i) => {
              return (
                <div key={i}>
                  <MagazinProducts elem={e} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
