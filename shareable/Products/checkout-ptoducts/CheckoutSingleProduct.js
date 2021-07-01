import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const CheckoutSingleProduct = () =>{
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
        <div className={"checkout__single__product"}>
            <div className={"checkout__single__product__left"}>
                <div>
                    <img src="/item.png" alt=""/>
                </div>
                <div className={"checkout__single__product__left__text"}>
                    <h3 className={"checkout__single__product__left__text--name"}>Ylumi</h3>
                    <p className={"checkout__single__product__left__text--type"}>Energy</p>
                    <p className={"checkout__single__product__left__text--quantity"}>1 packung</p>
                    <h3 className={"checkout__single__product__left__text--price"}>$ 28.00</h3>
                    <p className={"checkout__single__product__left__text--delete"}>Loschen</p>
                </div>
            </div>
            <div className={"checkout__single__product__right"}>
                <div className={"checkout__single__product__right__top"}>
                    <div className={"checkout__single__product__right__top__left"}>
                        <button>Warenkorb aktualisieren</button>
                        <p>menge</p>
                    </div>
                    <div className={"checkout__single__product__right__top__quantity"}>
                        <input type="number"  min={"1"} max={"10"} value={value < 10 ? `0${value}` : value }/>
                        <div className={"checkout__single__product__right__top__quantity__btns"}>
                            <button className={"btnplus"} onClick={onIncHandler}><FontAwesomeIcon icon={faPlus}/></button>
                            <button className={"btnminus"} onClick={onDecHandler}><FontAwesomeIcon icon={faMinus}/></button>
                        </div>
                    </div>
                </div>
                <div className={"checkout__single__product__right__whishlist"}>
                    <svg
                        onClick={() => router.push(isAuthenticated ? '/konto/whishlist' : '/login')}
                        xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512' className={"letter-svg"} style={{margin:"0 14px"}}>
                        <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z' style={{fill:"none",strokeMiterlimit:"10",strokeWidth:"32px"}} />
                    </svg>
                    <p>Auf meine Wunschliste verschieben</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSingleProduct