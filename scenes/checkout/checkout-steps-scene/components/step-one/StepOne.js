import CheckoutSingleProduct from "../../../../../shareable/Products/checkout-ptoducts/CheckoutSingleProduct";
import StepOneSingleProduct from "../../../../../shareable/Products/checkout-ptoducts/step-one/StepOneSingleProduct";
import {useState} from "react"
import StepOneModal from "./modal/StepOneModal";
import CheckoutModal from "../../../components/checkout-modal/CheckoutModal";
const StepOne = ({next,prev}) =>{
    const data = [1,2,3]
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return(
        <div className={"checkout__stepone__container"}>
            <div className={"checkout__stepone__container__title"}>
                <p>Meine Bestellung</p>
            </div>
            <div className={"checkout__stepone__container__products"}>
                {data.map((e,i)=>{
                    return(
                        <StepOneSingleProduct/>
                    )
                })}
            </div>
            <div className={"checkout__stepone__container__bottom"}>
                <p className={"checkout__stepone__container__bottom--title"}>Bestellübersicht</p>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text"}>
                        Zwischensumme
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price"}>
                        € 23,33
                    </p>
                </div>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text"}>
                        MwST.
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price"}>
                        € 4,67
                    </p>
                </div>
                <div className={"checkout__stepone__container__bottom__item"}>
                    <p className={"checkout__stepone__container__bottom__item--text last-checkout-one-step-txt"}>
                        Gesamtsumme
                    </p>
                    <p className={"checkout__stepone__container__bottom__item--price last-checkout-one-step-price"}>
                        € 28,00
                    </p>
                </div>
                <button onClick={showModal}>Weiter zur Lieferadresse</button>
                <StepOneModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} next={next}/>
            </div>

        </div>
    )
}

export default StepOne