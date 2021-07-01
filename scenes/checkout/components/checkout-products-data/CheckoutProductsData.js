import {Collapse} from "antd";
import {useState} from "react"
import CheckoutModal from "../checkout-modal/CheckoutModal";
const CheckoutProductsData = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const data = ["Brauchen Sie Hilfe?","Versandinformationen","Umtausch und Rückerstattung "]
    const {Panel} = Collapse
    return(
        <div className={"checkout_prod_data"}>
            <div className={"checkout__products__data__container"}>
                <div className={"checkout__products__data__container__toptxt"}>
                    <h2 className={"checkout__products__data__container__toptxt--title"}>
                        Bestellübersicht
                    </h2>
                    <div className={"checkout__products__data__container__toptxt__item"}>
                        <p>Zwischensumme</p>
                        <p>
                            € 23,33
                        </p>
                    </div>
                    <div className={"checkout__products__data__container__toptxt__item"}>
                        <p>
                            MwST.
                        </p>
                        <p>
                            € 4,67
                        </p>
                    </div>
                    <div className={"checkout__products__data__container__toptxt__item"}>
                        <p>
                            Gesamtsumme
                        </p>
                        <p>
                            € 28,00
                        </p>
                    </div>
                    <button onClick={showModal}>Checkout</button>

                </div>
                <div className={"checkout__products__data__container__collapse"}>
                    {
                        data.map((e,i)=>{
                            return(
                                <Collapse
                                    key={i}
                                    expandIconPosition='right'
                                    ghost='true'
                                >
                                    <Panel header={`${e}`} key={0} >
                                        text
                                    </Panel>
                                </Collapse>
                            )
                        })
                    }
                </div>
            </div>
            <CheckoutModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </div>
    )
}

export default CheckoutProductsData