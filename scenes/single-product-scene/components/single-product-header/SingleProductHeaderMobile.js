import ShareableSelect from "../../../../shareable/select/ShareableSelect";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {addToWishList, getSingleProduct} from "../../../../services/actions/products";
import {addToBasket} from "../../../../services/actions/basket";

const SingleProductHeaderMobile = () => {

    const router = useRouter()
    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    });
    const dispatch = useDispatch();

    const {singleProduct} = useSelector((state) => state.products);
    const {isAuthenticated} = useSelector((state) => state.auth);
    const singleProductVariantId = useSelector((state) => state.singleProdPage.singleProductVariantId)
    const [defaultVariant, setDefaultVariant] = useState([])
    const [bottleId, setBottleId] = useState(
        singleProduct.variants_of_a_products.filter((item) => {
            return item.main === true;
        }).id
    );
    const [productPrice, setProductPrice] = useState(defaultVariant[0]?.price);
    const [productQuantity, setproductQuantity] = useState(
        defaultVariant[0]?.quantity
    );
    let [defaultProductVariant, setDefaultProductVariant] = useState(
        defaultVariant
    );
    const [value, setValue] = useState(1);
    const maxLimit = productQuantity || defaultVariant[0]?.quantity;


    useEffect(() => {
        setProductPrice(
            singleProduct?.variants_of_a_products?.filter((item) => {
                return item.id === bottleId;
            })[0]?.price
        );
        setproductQuantity(
            singleProduct?.variants_of_a_products?.filter((item) => {
                return item.id === bottleId;
            })[0]?.quantity
        );
        setValue(1);
    }, [bottleId]);


    useEffect(() => {
        setDefaultProductVariant(
            singleProduct.variants_of_a_products.filter((item) => {
                return item.main === true;
            })
        );
    }, []);

    const onIncHandler = () => {
        if (maxLimit === undefined && value < Number(singleProduct.variants_of_a_products.find(item => item.main === true).quantity)) {
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
    const onChanges = () => {
    };


    useEffect(() => {
        setDefaultVariant(singleProduct?.variants_of_a_products.filter(item => item.main === true))
    }, [])
    useEffect(() => {
        setDefaultVariant(singleProduct?.variants_of_a_products.filter(item => item.id === singleProductVariantId))
    }, [singleProductVariantId])

    let variantId = []

    if (singleProduct.variants_of_a_products.length === 1) {
        variantId = [...singleProduct.variants_of_a_products]
    } else {
        variantId = singleProduct.variants_of_a_products.filter((item) => {
            return item.main === true;
        })
    }

    const toggleVariantAsfavourite = (id, variantId, defaultId) => {
        if (!isAuthenticated) {
            return router.push("/login");
        }
        if (variantId === undefined) {
            dispatch(addToWishList(id, defaultId[0].id));
        } else {
            dispatch(addToWishList(id, variantId))
        }
    };

    const addProductToBasket = (id, variantId, defaultId, quantity) => {
        if (!isAuthenticated) {
            return router.push("/login");
        }
        if (variantId === undefined) {
            dispatch(addToBasket(id, defaultId[0].id, quantity));
        } else {
            dispatch(addToBasket(id, variantId, quantity))
        }
    }
    return (
        <>
            <div className={"single-product-header-mobile"}>
                <div className={"left-side"}>
                    <p>{singleProduct?.brand?.name}</p>
                    <h2>{singleProduct?.name.toUpperCase()}</h2>
                    <a href="#">{singleProduct?.kind}</a>
                    <div className={"left-side-select"}>
                        <div className={"select-ml"}>
                            <div
                                className={"cart__sidebar__product__body__text--quantityinp"}
                            >
                                <span>
                                    Menge
                                </span>
                                <div>
                                    <input
                                        type="number"
                                        min={"1"}
                                        onChange={onChanges}
                                        value={value < 10 ? `0${value}` : value}
                                    />
                                    <div className={"btnd-div"}>
                                        <button className={"btnplus"} onClick={onIncHandler}>
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </button>
                                        <button className={"btnminus"} onClick={onDecHandler}>
                                            <FontAwesomeIcon icon={faMinus}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={"select-ml-el"}>
                                <span>inhalt</span>
                                <ShareableSelect
                                    product={singleProduct}
                                    defaultValue={defaultVariant[0]?.bottle_sizes}
                                    value={"large"}
                                    data={singleProduct}
                                    setBottleId={setBottleId}
                                />
                            </div>
                        </div>
                        <div className={"select-number"}>
                            <p>
                                {formatter.format(
                                    value * singleProduct?.variants_of_a_products?.filter(item => item.id === singleProductVariantId)[0]?.price ||
                                    singleProduct.variants_of_a_products.find((item) => {
                                        return item.main === true;
                                    }).price
                                )}
                            </p>
                            <div className={"r-first"}>
                                <span>Versandkostenfrei*</span>
                                <span>$ 416,67 / 100ML</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"right-side"}>
                    <p onClick={() => {
                        addProductToBasket(singleProduct.id, !bottleId ? defaultVariant[0]?.id : bottleId, variantId, value)
                    }}>in den warenkorb</p>
                    <div className={"bot-text-right"}>
                        <div className={"r-second"}>
                            <p>auf meine wunchliste</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="512"
                                height="512"
                                viewBox="0 0 512 512"
                                className={"letter-svg heart-icon-item"}
                                style={
                                    !singleProduct?.variants_of_a_products?.find(item => item.id === singleProductVariantId) ?
                                        singleProduct?.variants_of_a_products?.find(item => item.id === variantId[0].id).favorite ?
                                            {stroke: "#000000"}
                                            : {stroke: "#7b7b7b"} :
                                        singleProduct?.variants_of_a_products?.find(item => item.id === singleProductVariantId)?.favorite ?
                                            {stroke: "#000000"}
                                            : {stroke: "#7b7b7b"}
                                }
                                onClick={() => {
                                    toggleVariantAsfavourite(singleProduct.id, !bottleId ? defaultVariant[0]?.id : bottleId, variantId)
                                    console.log(singleProduct, "***********//////////////")
                                }}
                            >
                                <path
                                    d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                                    style={
                                        !singleProduct?.variants_of_a_products?.find(item => item.id === singleProductVariantId) ?
                                            singleProduct?.variants_of_a_products?.find(item => item.id === variantId[0].id).favorite ?
                                                {
                                                    fill: "#000000",
                                                    strokeMiterlimit: "10",
                                                    strokeWidth: "32px",
                                                }
                                                : {
                                                    fill: "none",
                                                    strokeMiterlimit: "10",
                                                    strokeWidth: "32px",
                                                } :
                                            singleProduct?.variants_of_a_products?.find(item => item.id === singleProductVariantId)?.favorite
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProductHeaderMobile;
