import Link from "next/link";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});
const CartSidebarFooter = ({ cost, data, headerPageText }) => {
  return (
    <>
      {data?.length !== 0 ? (
        <div className={"cart__sidebar__footer"}>
          <div className={"cart__sidebar__footer__top"}>
            <div className={"cart__sidebar__footer__top__first"}>
              <p>{headerPageText?.sidebar_cart_shipment}</p>
              <p>{formatter.format(cost ? cost : 0)}</p>
            </div>
            <div className={"cart__sidebar__footer__top__second"}>
              <p>
                {headerPageText?.sidebar_cart_total}
                <br />
                <span>{headerPageText?.sidebar_cart_total}</span>
              </p>
              <p>{formatter.format(cost ? cost : 0)}</p>
            </div>
          </div>
          <div className={"cart__sidebar__footer__bottom"}>
            <Link href={"/checkout"}>
              <p className={"cart__sidebar__footer__bottom__link"}>
                {headerPageText?.sidebar_cart_button}
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: "2.5rem", textTransform: "uppercase" }}>
          {headerPageText?.sidebar_cart_button}
        </p>
      )}
    </>
  );
};

export default CartSidebarFooter;
