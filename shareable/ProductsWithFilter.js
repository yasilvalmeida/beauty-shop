import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import {addToWishList, addToWishListTwo} from "../services/actions/products";
import moment from "moment";
import { addToBasket } from "../services/actions/basket";
import {getProductsByCategories} from "../services/actions/products";
import { Spin, Space } from "antd";
import ProductInformation from "../shareable/Products/ProductInformation";

const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});

const ProductsWithFilter = ({
                              autoFlow,
                              gridTemplateColumns,
                              gap,
                              position
                            }) => {
  const headtext = "Männerpflege";
  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const router = useRouter();
  const navListState = useSelector((state) => state.navbar.navList);
  const top3Categories = navListState.slice(0, 3);
  const [defaultCategory, setDefaultCategory] = useState(0);
  const defaultLanguage = useSelector(
    (state) => state?.navbar?.selectedLanguage
  );
  const productsByCategoriesState = useSelector(
    (state) => state.products.productsByCategories
  );
  const [productsByCategories, setProductsByCategories] = useState([])

  useEffect(() => {
    dispatch(getProductsByCategories(1, 3, top3Categories));
  }, [navListState]);

  useEffect(() => {
    setProductsByCategories(productsByCategoriesState);
  }, [productsByCategoriesState])

  const addToFavorites = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    if (position === "HerrenPageTwo") {
      dispatch(
        addToWishListTwo(
          id,
          variantId,
          parfum
            ? "parfums"
            : beauty
            ? "beauties"
            : interiour
            ? "interieurs"
            : null
        )
      );
    } else {
      dispatch(
        addToWishList(
          id,
          variantId,
          parfum
            ? "parfums"
            : beauty
            ? "beauties"
            : interiour
            ? "interieurs"
            : null
        )
      );
    }
  };

  const addProductToBasket = (id, variantId, quantity) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToBasket(id, variantId, quantity));
  };

  const toProductPage = (e) => {
    if (router.pathname !== '/products') {
        router.push(`/products/${e}`);
    } else {
        router.push(e);
    }
  };

  const toApproved = () => {
    router.push("/magazinartikelone");
  }

  return (
    <>
      <div className={"filtered-products-body d-flex flex-wrap"}>
        <div className={"products-filter-head-home"}>
          <h2>{headtext}</h2>
          <div className={"d-flex filter-btns"}>
            {top3Categories?.map((e, i) => {
              return (
                <button
                  key={i}
                  className={`col-lg-4 ${
                    defaultCategory === i ? "active-filter" : null
                  }`}
                  onClick={() => {
                    setDefaultCategory(i);
                  }}
                >
                  {e.name}
                </button>
              );
            })}
          </div>
        </div>
        {productsByCategories?.length === 0 ? (
          <div className={"loader__component"}>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          <div>
            <div
              className={"products-with-filter-list"}
              style={{
                gridTemplateColumns: gridTemplateColumns,
                gridAutoFlow: autoFlow,
                gap: gap,
              }}
            >
              {productsByCategories[defaultCategory]?.products?.map(
                (e, i) => {
                  return (
                    <div className={"first-prod-items col-lg-3"} key={i}>
                      <ProductInformation
                        e={e}
                        moment={moment}
                        formatter={formatter}
                        addToFavorites={addToFavorites}
                        addProductToBasket={addProductToBasket}
                        toProductPage={toProductPage}
                        toApproved={toApproved}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsWithFilter;
