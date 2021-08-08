import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  deleteFromBasket,
} from "../../../services/actions/basket";

const CartSidebarProduct = ({ elem }) => {
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  const [value, setValue] = useState(elem.quantity);

  useEffect(() => {
    setValue(Number(elem?.quantity));
  }, [elem?.quantity]);

  const onIncHandler = () => {
    if (value < elem.variants_of_a_products[0].quantity) {
      setValue(value + 1);
      dispatch(addToBasket(elem.id, elem.variants_of_a_products[0].id, 1));
    }
  };
  const onDecHandler = () => {
    if (value > 1) {
      setValue(value - 1);
      dispatch(addToBasket(elem.id, elem.variants_of_a_products[0].id, -1));
    }
  };
  const onChange = () => {};
  return (
    <div className={"cart__sidebar__product__body"}>
      <div className={"cart__sidebar__product__body__image"}>
        <img
          src={
            !elem?.variants_of_a_products[0].images[0].url
              ? elem.images[0].url
              : elem?.variants_of_a_products[0].images[0].url
          }
          alt={""}
        />
      </div>
      <div className={"cart__sidebar__product__body__text"}>
        <span className={"cart__sidebar__product__body__text--name"}>
          {elem?.brand?.name}
        </span>
        <span className={"cart__sidebar__product__body__text--type"}>
          {elem?.kind}
        </span>
        <span className={"cart__sidebar__product__body__text--quantity"}>
          {value} Packung
        </span>
        <span className={"cart__sidebar__product__body__text--price"}>
          {formatter.format(elem.variants_of_a_products[0].price * value || 0)}
        </span>
        <div className={"cart__sidebar__product__body__text--quantityinp"}>
          <button className={"btnplus"} onClick={onIncHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <input
            type="number"
            min={"1"}
            max={"10"}
            onChange={onChange}
            value={value < 10 ? `0${value}` : value}
          />
          <button className={"btnminus"} onClick={onDecHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <span
          className={"cart__sidebar__product__body__text--delete"}
          onClick={() =>
            dispatch(
              deleteFromBasket(elem?.id, elem.variants_of_a_products[0].id)
            )
          }
        >
          löschen
        </span>
      </div>
    </div>
  );
};

export default CartSidebarProduct;
