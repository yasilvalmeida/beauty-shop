import Link from "next/link";

const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
});
const CartSidebarFooter = ({cost, data}) => {
    return (
        <>
            {data?.length !== 0 ?
                <div className={"cart__sidebar__footer"}>
                    <div className={"cart__sidebar__footer__top"}>
                        <div className={"cart__sidebar__footer__top__first"}>
                            <p>Versand:</p>
                            <p>€ 0,00</p>
                        </div>
                        <div className={"cart__sidebar__footer__top__second"}>
                            <p>
                                Gesamtpreis
                                <br/>
                                <span>inkl. MwST.</span>
                            </p>
                            <p>{formatter.format(cost)}</p>
                        </div>
                    </div>
                    <div className={"cart__sidebar__footer__bottom"}>
                        <Link href={"/checkout"}><p className={"cart__sidebar__footer__bottom__link"}>CHECKOUT</p>
                        </Link>
                    </div>
                </div>
                :
                <p style={{fontSize:"2.5rem",textTransform:"uppercase"}}>There is no products in basket</p>
            }
        </>
    )
};

export default CartSidebarFooter