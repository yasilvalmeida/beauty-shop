import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {addToBasket} from "../../services/actions/basket";
import { Spin, Space } from "antd";
import ProductInformation from "./ProductInformation";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const ProductsWithLeftText = ({ products, leftText, addToWishList }) => {
  const shopUrl = "/shop";
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const addToFavorites = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToWishList(id, variantId));
  };
  const addProductToBasket = (id, variantId, quantity) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToBasket(id, variantId, quantity));
  };
  const toProductPage = (e) => {
    if (router.pathname !== "/products") {
      router.push(`/products/${e}`);
    } else {
      router.push(e);
    }
  };
  const toApproved = () => {
    router.push("/magazinartikelone");
  };
  return (
    <>
      <div className="first-products-body ">
        <div className="firstprod-left-text">
          <div className="firstprod-left-text">
            <p>{leftText?.Header}</p>
            <h2>{leftText?.Title}</h2>
            <span>{leftText?.Text}</span>
          </div>
          <Link href={shopUrl}>
            <a href={shopUrl}>
              <button>{leftText?.Button_text}</button>
            </a>
          </Link>
        </div>
        {products?.length === 0 ? (
          <div className={"loader__component"}>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          <div className={"prod-items-bod"}>
            {products?.map((e, i) => {
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
                    router={router}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsWithLeftText;
