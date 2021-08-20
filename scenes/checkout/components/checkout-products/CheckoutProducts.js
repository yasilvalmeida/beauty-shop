import CheckoutSingleProduct from "../../../../shareable/Products/checkout-ptoducts/CheckoutSingleProduct";

const CheckoutProducts = ({ checkoutPageData }) => {
  const data = [1, 1, 2];
  return (
    <div className={"checkout__products__container"}>
      <div className={"checkout__products__container__sales"}>
        <h3>{checkoutPageData?.free_shipping_alert?.replace(/@/i, "52")}</h3>
      </div>
      <div className={"checkout__products__container__products"}>
        {data.map((e, i) => {
          return (
            <div
              className={"checkout__products__container__products__body"}
              key={i}
            >
              <CheckoutSingleProduct checkoutPageData={checkoutPageData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProducts;
