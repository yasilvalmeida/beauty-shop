import React, { useCallback, useEffect, useState } from "react";
import PagePagination from "../../../../../shareable/pagination/Pagination";
import InfoContainer from "../../../../../shareable/info-container/InfoContainer";
import ShopDescription from "./shop-description/ShopDescription";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../../../../services/actions/products";
import { useRouter } from "next/router";
import ShopSingleProduct from "../../../../../shareable/Products/ShopSingleProduct";
import moment from "moment";
import {
  getShopProducts,
  sortShopProducts,
} from "../../../../../services/actions/shop";
import { Spin, Space } from "antd";

const ShopBodyContainer = ({
  selected,
  filterType,
  filterId,
  maxItemAllowed,
  setCurrent,
  current,
  scrollToref,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loaded, count, shopProducts, staticShopProducts } = useSelector(
    (state) => state.shop
  );
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const [products, setProducts] = useState([]);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const favouriteClickHandler = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToWishList(id, variantId));
  };

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(maxItemAllowed);

  const handleBegin = () => {
    setCurrent(1);
  };
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
  const handleEnd = () => {
    setCurrent(Math.ceil(count / maxItemAllowed) - 1);
  };

  useEffect(() => {
    setProducts([]);
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
      getShopProducts(current, maxItemAllowed, filterType, filterId, lang)
    );
  }, [current, filterId, lang]);

  useEffect(() => {
    setProducts(shopProducts);
  }, [shopProducts]);

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
      dispatch(sortShopProducts([...staticShopProducts]));
    }
  }, [selected]);

  return (
    <div className="shop-right-body">
      {!loaded ? (
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <div className="__products">
            {products?.map((e, i) => {
              return (
                <div key={i}>
                  <ShopSingleProduct
                    elem={e}
                    favouriteClickHandler={favouriteClickHandler}
                  />
                </div>
              );
            })}
            <InfoContainer className="middleInfoContainer" type="one" />
            <InfoContainer className="bottomInfoContainer" type="two" />
          </div>
        </>
      )}
      <div className="shop-desc-body">
        <PagePagination
          begin={handleBegin}
          prev={handlePrev}
          next={handleNext}
          end={handleEnd}
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
