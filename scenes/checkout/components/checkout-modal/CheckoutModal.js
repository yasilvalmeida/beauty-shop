import { Modal, Collapse} from 'antd';
import {useRouter} from "next/router";
const CheckoutModal = ({isModalVisible,setIsModalVisible}) =>{
    const {Panel} = Collapse
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const data = [1,2,3]
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const router = useRouter()
    return(
        <>
            <Modal
                title="Glückwunsch!"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1200}
                footer={[
                    <button className={"checkout-modal-btn"} onClick={()=>router.push("/checkout/step1")}>Gratis proben wählen</button>
                ]}
            >
                <p className={"checkout-modal-text"}>Suchen sie sich ihre drei grats-proben aus, indem sie die marken im dropdown Menü auswählen und dann den Namen des Parfums.</p>
                {
                    data.map((e,i)=>{
                        return(
                            <Collapse
                                key={i}
                                expandIconPosition='right'
                                ghost='true'
                            >
                                <Panel header={"Wählen sie eine marke aus"} key={0} >
                                    text
                                </Panel>
                            </Collapse>
                        )
                    })
                }
            </Modal>
        </>
    )
}

export default CheckoutModal