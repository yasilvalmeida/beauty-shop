import SingleProduct from "../../../../shareable/Products/SingleProduct";
import { useState, useEffect } from "react";
import {
  getUserWishlist,
  addToWishList,
} from "../../../../services/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ModalWhishlist from "./components/Modal";
import { getUserDataFromLocalStorage } from "../../../../services/actions/auth";

const WhishList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { kontoPageTextData } = useSelector((state) => state.konto);
  const { favouriteProducts } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getUserWishlist());
  }, []);

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  const favouriteClickHandler = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToWishList(id, variantId));
  };
  const favouriteProductsLoading = useSelector(
    (state) => state.products.favouriteProductsLoading
  );
  return (
    <div className={"whishlist__container"}>
      <div className={"whishlist__container__text"}>
        <h2>{kontoPageTextData?.wishlist_header}</h2>
        <p className={"whishlist__container__text--el2"}>
          {kontoPageTextData?.wishlist_title}
        </p>
        <p className={"whishlist__container__text--el3"}>
          {kontoPageTextData?.wishlist_text}
        </p>
        <button onClick={showModal}>
          {kontoPageTextData?.wishlist_button}
        </button>
        <ModalWhishlist show={show} setShow={setShow} />
        <div className={"zuruck_back_body"}>
          <button
            className={"zuruck_back"}
            onClick={() => router.push("/konto/main")}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={"head-search-icon"}
            />{" "}
            {kontoPageTextData?.adress_back}
          </button>
        </div>
      </div>
      <div className={"whishlist__container__products"}>
        {favouriteProductsLoading ? (
          <p>Loading</p>
        ) : (
          favouriteProducts.map((e, i) => {
            return (
              <div key={i}>
                <SingleProduct
                  elem={e}
                  favouriteClickHandler={favouriteClickHandler}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WhishList;
