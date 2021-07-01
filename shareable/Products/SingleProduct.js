import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {addToBasket} from "../../services/actions/basket";

const formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
});

const SingleProduct = ({elem, favouriteClickHandler, filter}) => {
    const router = useRouter();
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state=>state.auth)
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
        dispatch(addToBasket(id, variantId, 1))
    };

    return (
        <>
            <div className={" first-prod-items col-lg-3"}>
                <div className={"picture-body-prod"}>
                    {elem?.images && (
                        <img
                            src={
                                elem?.variants_of_a_products[0]?.images[0]?.url ?
                                    elem?.variants_of_a_products[0]?.images[0]?.url :
                                    elem?.images[0]?.url
                            }
                            className={"item-picture"}
                            alt=""
                            onClick={() => toProductPage(elem?.id)}
                        />
                    )}
                    {!elem?.approoved_by_DPAB && (
                        <img
                            src="/15-layers.png"
                            alt="15 layers"
                            className={"circled-txt"}
                            onClick={toApproved}
                        />
                    )}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 512 512"
                        className={"letter-svg heart-icon-item"}
                        onClick={() =>
                            favouriteClickHandler(elem?.id, elem?.variants_of_a_products[0].id)
                        }
                        style={elem?.variants_of_a_products[0].favorite ? {stroke: "#000000"} : {stroke: "#7b7b7b"}}
                    >
                        <path
                            d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                            style={
                                elem?.variants_of_a_products[0].favorite
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
                </div>
                {moment(new Date()).format("YYYY-MM-DD") <= elem?.New_Date_Limit ?
                    <span className={'item-new'}>New</span> :
                    <span className={'item-notNew'}>New</span>}
                {/**/}
                {elem?.clean_product ? (
                    <span className={"prod-txt-head"}>Clean product</span>
                ) : (
                    <span className={"prod-txt-head"} style={{opacity: "0"}}>
                        Clean product
                    </span>
                )}
                {elem?.limited_edition ? <span className={'prod-txt-head2'}>Limited edition</span> :
                    <span style={{opacity: "0"}} className={'prod-txt-head2'}>Limited edition</span>}
                {elem?.brand?.name ? (
                    <h3 className={"prod-txt-name"}>{elem?.brand?.name}</h3>
                ) : (
                    <h3 className={"prod-txt-name"} style={{opacity: 0}}>
                        Ylumi
                    </h3>
                )}
                {elem?.name ? (
                    <span className={"prod-txt-foot"}>{elem?.name}</span>
                ) : (
                    <span className={"prod-txt-foot"} style={{opacity: 0}}>
                         Energy Kapseln
                    </span>
                )}
                {elem?.kind ? (
                    <span className={"prod-txt-foot2"}>{elem?.kind}</span>
                ) : (
                    <span className={"prod-txt-foot2"} style={{opacity: 0}}>
                     Kapseln
          </span>
                )}
                <h3 className={"prod-txt-price"}>
                    {formatter.format(elem?.variants_of_a_products[0]?.price || 0)}
                </h3>

                <button onClick={() =>
                    basketClickHandler(elem?.id, elem?.variants_of_a_products.find(item => item.main === true).id)
                }>
                    <p>Quick shop </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                            fill: "none",
                            strokeMiterlimit: "10",
                            strokeWidth: "32px",
                            width: "19px",
                            height: "19px",
                            stroke: "#7b7b7b",
                        }}
                        className={"letter-svg"}
                    >
                        <circle cx="176" cy="416" r="16"/>
                        <circle cx="400" cy="416" r="16"/>
                        <polyline points="48 80 112 80 160 352 416 352"/>
                        <path d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"/>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default SingleProduct;
