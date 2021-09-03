import HeaderLoginPopup from "../../../../layouts/header/modal/HeaderLoginPopup";
import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import { addToWishList } from "../../../../services/actions/products";
import { addToBasket } from "../../../../services/actions/basket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const SingleProductHeader = () => {
  const router = useRouter();
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const {
    singleProductVariantId,
    singleProductData,
    singleProductPageTextData,
  } = useSelector((state) => state.singleProduct);
  const [defaultVariant, setDefaultVariant] = useState([]);
  const [bottleId, setBottleId] = useState(
    singleProductData?.variants_of_a_products?.filter((item) => {
      return item?.main === true;
    }).id
  );
  const [productPrice, setProductPrice] = useState(defaultVariant[0]?.price);
  const [productQuantity, setproductQuantity] = useState(
    singleProductData?.variants_of_a_products?.find(
      (item) => item?.main === true
    )?.quantity
  );
  let [defaultProductVariant, setDefaultProductVariant] =
    useState(defaultVariant);
  const [value, setValue] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const maxLimit = productQuantity || defaultVariant[0]?.quantity;

  useEffect(() => {
    setProductPrice(
      singleProductData?.variants_of_a_products?.filter((item) => {
        return item?.id === bottleId;
      })[0]?.price
    );
    setproductQuantity(
      singleProductData?.variants_of_a_products?.filter((item) => {
        return item?.id === bottleId;
      })[0]?.quantity
    );
    setValue(1);
  }, [bottleId]);

  useEffect(() => {
    setDefaultProductVariant(
      singleProductData?.variants_of_a_products?.filter((item) => {
        return item?.main === true;
      })
    );
  }, []);

  const onIncHandler = () => {
    if (
      maxLimit === undefined &&
      value <
        Number(
          singleProductData?.variants_of_a_products?.find(
            (item) => item?.main === true
          )?.quantity
        )
    ) {
      setValue(value + 1);
    } else {
      if (value < maxLimit) {
        setValue(value + 1);
      }
    }
  };
  const onDecHandler = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const onChanges = () => {};

  useEffect(() => {
    setDefaultVariant(
      singleProductData?.variants_of_a_products?.filter(
        (item) => item?.main === true
      )
    );
  }, []);

  useEffect(() => {
    setDefaultVariant(
      singleProductData?.variants_of_a_products?.filter(
        (item) => item?.id === singleProductVariantId
      )
    );
  }, [singleProductVariantId]);

  let variantId = [];

  if (singleProductData?.variants_of_a_products?.length === 1) {
    variantId = [...singleProductData?.variants_of_a_products];
  } else {
    variantId = singleProductData?.variants_of_a_products?.filter((item) => {
      return item?.main === true;
    });
  }

  const toggleVariantAsfavourite = (id, variantId, defaultId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    if (variantId === undefined) {
      dispatch(addToWishList(id, defaultId[0].id));
    } else {
      dispatch(addToWishList(id, variantId));
    }
  };
  const addProductToBasket = (id, variantId, defaultId, quantity) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    if (variantId === undefined) {
      dispatch(addToBasket(id, defaultId[0].id, quantity));
    } else {
      dispatch(addToBasket(id, variantId, quantity));
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className={"single-product-header"}>
        <div className={"left-side"}>
          <p>{singleProductData?.brand}</p>
          <h2>{singleProductData?.name.toUpperCase()}</h2>
          <a href="#">{singleProductData?.kind}</a>
          <div className="left-side-select-body">
            <div className={"left-side-select"}>
              <span>{singleProductPageTextData?.content}</span>
              <ShareableSelect
                product={singleProductData}
                defaultValue={defaultVariant[0]?.bottle_sizes}
                value={"large"}
                data={singleProductData}
                setBottleId={setBottleId}
                className="single-product-select-variation"
              />
              <HeaderLoginPopup
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </div>
            <div className={"left-side-select"}>
              <span>{singleProductPageTextData?.amount}</span>
              <div
                className={"cart__sidebar__product__body__text--quantityinp"}
              >
                <input
                  type="number"
                  min={"1"}
                  onChange={onChanges}
                  value={value < 10 ? `0${value}` : value}
                />
                <div>
                  <button className={"btnplus"} onClick={onIncHandler}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button className={"btnminus"} onClick={onDecHandler}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"right-side"}>
          <div
            className={"select-number"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (isAuthenticated) {
                addProductToBasket(
                  singleProductData.id,
                  !bottleId ? defaultVariant[0]?.id : bottleId,
                  variantId,
                  value
                );
              } else {
                if (router.pathname !== "/login") {
                  showModal();
                }
              }
            }}
          >
            <p>{singleProductPageTextData?.add_basket}</p>
          </div>
          <div className={"bot-text-right"}>
            <p>
              {formatter.format(
                value *
                  (singleProductData?.variants_of_a_products?.filter(
                    (item) => item?.id === singleProductVariantId
                  )[0]?.price ||
                    singleProductData?.variants_of_a_products?.find((item) => {
                      return item?.main === true;
                    })?.price)
              )}
            </p>
            <div className={"r-first"}>
              {value *
                (singleProductData?.variants_of_a_products?.filter(
                  (item) => item?.id === singleProductVariantId
                )[0]?.price ||
                  singleProductData?.variants_of_a_products?.find((item) => {
                    return item?.main === true;
                  })?.price) >
              singleProductPageTextData?.free_shipping_condition ? (
                <>
                  <span>
                    {formatter.format(
                      singleProductPageTextData?.free_shipping_condition
                    )}
                  </span>
                  <span>{singleProductPageTextData?.free_shipping}</span>
                </>
              ) : (
                <span></span>
              )}
            </div>
            <div className={"r-second"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                className={"letter-svg heart-icon-item"}
                style={
                  !singleProductData?.variants_of_a_products?.find(
                    (item) => item?.id === singleProductVariantId
                  )
                    ? singleProductData?.variants_of_a_products?.find(
                        (item) => item?.id === variantId[0]?.id
                      )?.favorite
                      ? { stroke: "#000000" }
                      : { stroke: "#7b7b7b" }
                    : singleProductData?.variants_of_a_products?.find(
                        (item) => item?.id === singleProductVariantId
                      )?.favorite
                    ? { stroke: "#000000" }
                    : { stroke: "#7b7b7b" }
                }
                onClick={() => {
                  if (isAuthenticated) {
                    toggleVariantAsfavourite(
                      singleProductData.id,
                      !bottleId ? defaultVariant[0]?.id : bottleId,
                      variantId
                    );
                  } else {
                    if (router.pathname !== "/login") {
                      showModal();
                    }
                  }
                }}
              >
                <path
                  d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                  style={
                    !singleProductData?.variants_of_a_products?.find(
                      (item) => item?.id === singleProductVariantId
                    )
                      ? singleProductData?.variants_of_a_products?.find(
                          (item) => item?.id === variantId[0]?.id
                        )?.favorite
                        ? {
                            fill: "#000000",
                            strokeMiterlimit: "10",
                            strokeWidth: "32px",
                          }
                        : {
                            fill: "none",
                            strokeMiterlimit: "10",
                            strokeWidth: "32px",
                          }
                      : singleProductData?.variants_of_a_products?.find(
                          (item) => item?.id === singleProductVariantId
                        )?.favorite
                      ? {
                          fill: "#000000",
                          strokeMiterlimit: "10",
                          strokeWidth: "32px",
                        }
                      : {
                          fill: "none",
                          strokeMiterlimit: "10",
                          strokeWidth: "32px",
                        }
                  }
                />
              </svg>
              <p>{singleProductPageTextData?.wishlist}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductHeader;
