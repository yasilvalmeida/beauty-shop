import { useState } from "react";
import { addToBasket } from "../../../services/actions/basket";
import HeaderLoginPopup from "../../../layouts/header/modal/HeaderLoginPopup";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MagazinProducts = ({ elem }) => {
  const router = useRouter();
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  const [rotate, setRotate] = useState("");
  const [transformed, setTransformed] = useState("");
  const { variants_of_a_products } = elem;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  let variantId = [];
  const name =
    elem?.name?.length <= 10
      ? elem?.name
      : elem?.name?.substring(0, 10) + "...";
  if (elem?.variants_of_a_products?.length === 1) {
    variantId = [...elem?.variants_of_a_products];
  } else {
    variantId = elem?.variants_of_a_products?.filter((item) => {
      return item?.main === true;
    });
  }
  const addProductToBasket = (id, variantId, defaultId, quantity) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    if (variantId === undefined) {
      dispatch(addToBasket(elem?.product_id, defaultId[0].id, quantity));
    } else {
      dispatch(addToBasket(elem?.product_id, variantId, quantity));
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div
      className={"magazin__single__item__body"}
      onMouseOver={() => {
        setRotate("rotated");
        setTransformed("transformed");
      }}
      onMouseLeave={() => {
        setRotate("");
        setTransformed("");
      }}
    >
      <HeaderLoginPopup
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div className={"magazin__single__item__body__image"}>
        <img
          src={elem.images?.length > 0 ? elem?.images[0]?.url : "/item.png"}
          alt={name}
          height={180}
        />
      </div>
      <div className={"magazin__single__item__body__text"}>
        <div className={"magazin__single__item__body__text--nohover"}>
          <h3>{elem.text_one}</h3>
          <p>{elem.text_two}</p>
          <p className={`plusik ${rotate}`}>+</p>
        </div>
        <div
          className={`magazin__single__item__body__text__hover ${transformed}`}
        >
          <h6 className={"magazin__single__item__body__text__hover--name"}>
            {name}
          </h6>
          <p className={"magazin__single__item__body__text__hover--type"}>
            {elem.brand}
          </p>
          <p className={"magazin__single__item__body__text__hover--type2"}>
            {variants_of_a_products?.length > 0
              ? variants_of_a_products[0]?.number
              : "No Number"}
          </p>
          <p className={"magazin__single__item__body__text__hover--price"}>
            {formatter.format(
              variants_of_a_products?.length > 0
                ? variants_of_a_products[0]?.price
                : 0
            )}
          </p>
          <button
            className={"magazin__single__item__body__text__hover--button"}
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
            <p>Quick shop</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{
                fill: "none",
                strokeMiterlimit: "10",
                strokeWidth: "32px",
                width: "22px",
                height: "22px",
                stroke: "#7b7b7b",
              }}
              className={"letter-svg"}
            >
              <circle cx="176" cy="416" r="16" />
              <circle cx="400" cy="416" r="16" />
              <polyline points="48 80 112 80 160 352 416 352" />
              <path d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagazinProducts;
