import CheckoutProducts from "./components/checkout-products/CheckoutProducts";
import CheckoutProductsData from "./components/checkout-products-data/CheckoutProductsData";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";

const CheckoutScene = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
    }, []);
    return(
        <div className={"checkout__scene__container"}>
            <div className={"checkout__scene__container--title"}>
                <h2>Warenkorb</h2>
            </div>
            <div className={"checkout__scene__container__body"}>
                <CheckoutProducts/>
                <CheckoutProductsData/>
            </div>
        </div>
    )
}

export default CheckoutScene