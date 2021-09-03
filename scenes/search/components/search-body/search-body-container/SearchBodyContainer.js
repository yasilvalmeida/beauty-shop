import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../../../../services/actions/products";
import { useRouter } from "next/router";
import ShopSingleProduct from "../../../../../shareable/Products/ShopSingleProduct";
import Loader from "../../../../../shareable/Loader";
import { searchProducts } from "../../../../../services/actions/search";

const SearchBodyContainer = ({ word }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchCount, searchData, searchLoading } = useSelector(
    (state) => state.search
  );
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const favouriteClickHandler = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToWishList(id, variantId));
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([]);
    dispatch(searchProducts(lang, word));
  }, [word, lang]);
  useEffect(() => {
    setProducts(searchData);
  }, [searchData]);

  return (
    <div className="search-right-body">
      {searchLoading || searchCount === 0 ? (
        <Loader type="component" />
      ) : (
        <>
          <div className="__products">
            {products?.length > 0 ? (
              products?.map((e, i) => {
                return (
                  <div key={i}>
                    <ShopSingleProduct
                      elem={e}
                      favouriteClickHandler={favouriteClickHandler}
                    />
                  </div>
                );
              })
            ) : (
              <div className="result">
                <div className="result__box">
                  <span>No Results!</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <div className="search-desc-body"></div>
    </div>
  );
};

export default SearchBodyContainer;
