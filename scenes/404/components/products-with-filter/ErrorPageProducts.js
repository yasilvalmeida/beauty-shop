import ProductsWithFilter from "../../../../shareable/ProductsWithFilter";
import { getProductsWithFilter } from "../../../../services/actions/products";

const ErrorPageProducts = () => {
  return (
    <>
      <div className="product__with__filter">
        <ProductsWithFilter
          position={"NotFoundPage"}
          getProductsWithFilter={getProductsWithFilter}
        />
      </div>
    </>
  );
};

export default ErrorPageProducts;
