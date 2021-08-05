import React, { useCallback, useEffect, useState } from 'react';
import PagePagination from '../../../../../shareable/pagination/Pagination';
import SearchDescription from "./search-description/SearchDescription";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../../../../services/actions/products";
import { useRouter } from "next/router";
import ShopSingleProduct from "../../../../../shareable/Products/ShopSingleProduct";
import moment from "moment";
import {
  getShopProducts,
  sortShopProducts,
} from "../../../../../services/actions/shop";

const SearchBodyContainer = ({
  selected,
  filterType,
  filterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let productsData = useSelector((state) => state.shop.shopProducts);
  const count = useSelector((state) => state.shop.count);
  
  const { isAuthenticated } = useSelector((state) => state.auth);
  const favouriteClickHandler = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToWishList(id, variantId));
  };
  
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(maxItemAllowed);
  
  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
    if (current <= 1) {
      setCurrent(1);
    }
  };
  const handleNext = () => {
    if (current >= Math.ceil(count / maxItemAllowed)) {
      setCurrent(Math.ceil(count / maxItemAllowed));
    }
    setCurrent((prev) => prev + 1);
  };

  useEffect(() => {
    if (current === 1) {
      setMinValue(0);
      setMaxValue(maxItemAllowed);
    }
    if (current > 1) {
      setMinValue((current - 1) * maxItemAllowed);
      setMaxValue(current * maxItemAllowed);
    }
    scrollToref.current.scrollIntoView();
    dispatch(
      getShopProducts(
        current,
        maxItemAllowed,
        filterType,
        filterId
      )
    );
  }, [current]);

  useEffect(() => {
    
  }, [selected]);

  return (
    <div className="search-right-body">
      <div className="__products">
        {productsData?.map((e, i) => {
            return (
              <div key={i}>
                <ShopSingleProduct
                  elem={e}
                  favouriteClickHandler={favouriteClickHandler}
                />
              </div>
            );
          })}
      </div>
      <div className="search-desc-body">
        <PagePagination
          next={handleNext}
          prev={handlePrev}
          totalSize={count}
          current={current}
          maxAllowed={maxItemAllowed}
        />
        <SearchDescription />
      </div>
    </div>
  );
};

export default SearchBodyContainer;
