import React, { useCallback, useEffect, useRef, useState } from 'react';
import PagePagination from '../../../../../shareable/pagination/Pagination';
import InfoContainer from '../../../../../shareable/info-container/InfoContainer';
import ShopDescription from './shop-description/ShopDescription';
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../../../../services/actions/products";
import { useRouter } from "next/router";
import ShopSingleProduct from "../../../../../shareable/Products/ShopSingleProduct";
import moment from "moment";
import {
  getShopProducts,
  sortShopProducts,
} from "../../../../../services/actions/shop";

const ShopBodyContainer = ({selected}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let productsData = useSelector((state) => state.shop.shopProducts);
  const staticData = useSelector((state) => state.shop.staticShopProducts);
  const count = useSelector((state) => state.shop.count);
  const news = useSelector(({ news }) => news);

  const shopHeadTwo = news.newsReports.find((n) => n.position === "ShopPageTwo");
  const shopHeadThree = news.newsReports.find((n) => n.position === "ShopPageThree");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const favouriteClickHandler = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToWishList(id, variantId));
  };
  const maxItemAllowed = 22;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(maxItemAllowed);
  const [current, setCurrent] = useState(1);
  const scrollToref = useRef();

  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
    if (current <= 1) {
      setCurrent(1);
    }
  };
  const handleNext = () => {
      console.log(
        "handleNext",
        current,
        Math.ceil(count / maxItemAllowed),
        current >= Math.ceil(count / maxItemAllowed)
      );
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
    dispatch(getShopProducts(current === 1 ? current : (current - 1) * maxItemAllowed, maxItemAllowed), null, 0);
  }, [current]);

  useEffect(() => {
    if (selected === "A-Z") {
      dispatch(
        sortShopProducts([
          ...productsData.sort((a, b) => {
            return a.name.localeCompare(b.name);
          }),
        ])
      );
    } else if (selected === "Z-A") {
      dispatch(
        sortShopProducts([
          ...productsData.sort((a, b) => {
            return b.name.localeCompare(a.name);
          }),
        ])
      );
    } else if (selected === "Ascending") {
      dispatch(
        sortShopProducts([
          ...productsData.sort((a, b) => {
            return (
              a.variants_of_a_products.find((item) => item.main === true)
                .price -
              b.variants_of_a_products.find((item) => item.main === true).price
            );
          }),
        ])
      );
    } else if (selected === "Descending") {
      dispatch(
        sortShopProducts([
          ...productsData.sort((a, b) => {
            return (
              b.variants_of_a_products.find((item) => item.main === true)
                .price -
              a.variants_of_a_products.find((item) => item.main === true).price
            );
          }),
        ])
      );
    } else if (selected === "New") {
      dispatch(
        sortShopProducts([
          ...productsData.sort((a, b) => {
            return moment(b.New_Date_Limit) - moment(a.New_Date_Limit);
          }),
        ])
      );
    } else if (selected === "Old") {
      dispatch(
        sortShopProducts([
          ...productsData.sort((a, b) => {
            return moment(a.New_Date_Limit) - moment(b.New_Date_Limit);
          }),
        ])
      );
    } else {
      console.log("aaaaaaa");
      dispatch(sortShopProducts([...staticData]));
    }
  }, [selected]);

  return (
    <div className="shop-right-body" ref={scrollToref}>
      <div className="__products">
        {productsData &&
          productsData.length > 0 &&
          productsData.map((e, i) => {
            return (
              <div key={i}>
                <ShopSingleProduct
                  elem={e}
                  favouriteClickHandler={favouriteClickHandler}
                />
              </div>
            );
          })}
        <InfoContainer className="middleInfoContainer" textData={shopHeadTwo} />
        <InfoContainer
          className="bottomInfoContainer"
          textData={shopHeadThree}
        />
      </div>
      <div className="shop-desc-body">
        <PagePagination
          next={handleNext}
          prev={handlePrev}
          totalSize={count}
          current={current}
          maxAllowed={maxItemAllowed}
        />
        <ShopDescription />
      </div>
    </div>
  );
};

export default ShopBodyContainer;
