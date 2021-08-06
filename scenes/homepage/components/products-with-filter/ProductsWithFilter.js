import ProductsWithFilter from '../../../../shareable/ProductsWithFilter';
import {getProductsWithFilter} from "../../../../services/actions/products";

const ProductsWithFilterHomepage = () => {
  return (
    <div className='product__with__filter'>
      <ProductsWithFilter
        position={"HomePage"}
        getProductsWithFilter={getProductsWithFilter}
      />
    </div>
  );
};

export default ProductsWithFilterHomepage;
