import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const StepOneSingleProduct = () =>{
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    });
    const [value,setValue] = useState(1)
    const maxLimit = 10
    const onIncHandler = () =>{
        if(value < maxLimit){
            setValue(value + 1)
        }
        console.log(value)
    }
    const onDecHandler = () =>{
        if(value > 1){
            setValue(value - 1)
        }
        console.log(value)
    }
    return(
        <div className={"checkoutstep__single__product"}>
            <div className={"checkoutstep__single__product__left"}>
                <div className={"checkoutstep__single__product__left--img"}>
                    <img src="/item.png" alt=""/>
                </div>
                <div className={"checkoutstep__single__product__left__text"}>
                    <h3 className={"checkoutstep__single__product__left__text--name"}>Ylumi</h3>
                    <p className={"checkoutstep__single__product__left__text--type"}>Energy</p>
                    <p className={"checkoutstep__single__product__left__text--quantity"}>1 packung</p>
                    <h3 className={"checkoutstep__single__product__left__text--price"}>$ 28.00</h3>
                    <p className={"checkoutstep__single__product__left__text--delete"}>Loschen</p>
                </div>
            </div>
        </div>
    )
}

export default StepOneSingleProduct