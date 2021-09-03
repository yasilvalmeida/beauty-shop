import { useRouter } from "next/router";
import moment from "moment";
import { addToBasket } from "../../services/actions/basket";
import { useDispatch, useSelector } from "react-redux";
import ProductInformation from "./ProductInformation";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});
const ShopSingleProduct = ({ elem, favouriteClickHandler, filter }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
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

  const basketClickHandler = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToBasket(id, variantId, 1));
  };
  return (
    <>
      <div className={" first-prod-items col-lg-3"}>
        <ProductInformation
          e={elem}
          moment={moment}
          formatter={formatter}
          addToFavorites={favouriteClickHandler}
          addProductToBasket={basketClickHandler}
          toProductPage={toProductPage}
          toApproved={toApproved}
          router={router}
        />
      </div>
    </>
  );
};
export default ShopSingleProduct;
