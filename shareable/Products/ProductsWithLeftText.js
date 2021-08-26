import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addToBasket } from "../../services/actions/basket";
import { Spin, Space } from "antd";
import ProductInformation from "./ProductInformation";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const ProductsWithLeftText = ({
  products,
  leftText,
  addToWishList,
}) => {
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
    router.push("/approved");
  };
  return (
    <>
      <div className="first-products-body ">
        <div className="firstprod-left-text">
          <div>
            <p>{leftText?.header}</p>
            <Link href={leftText?.url || ""}>
              <a href={leftText?.url || ""}>
                <h2 style={{ cursor: "pointer" }}>{leftText?.title}</h2>
              </a>
            </Link>
            <span>{leftText?.text}</span>
          </div>
          <div className="button-body">
            <Link href={leftText?.url || ""}>
              <a href={leftText?.url || ""}>
                <button>{leftText?.button}</button>
              </a>
            </Link>
          </div>
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
                    isAuthenticated={isAuthenticated}
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
