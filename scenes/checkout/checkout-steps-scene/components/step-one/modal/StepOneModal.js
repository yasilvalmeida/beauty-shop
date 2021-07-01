import { Modal} from 'antd';
const StepOneModal = ({isModalVisible,setIsModalVisible,next}) => {
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return(
        <>
            <Modal
                title="Verpackungsservice"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1500}
                footer={[
                    <button className={"checkout-modal-btn-step-one"} onClick={next}>Gratis proben wählen</button>
                ]}
            >
                <p className={"checkout-modal-text"}>
                    Bitte geben sie hier ihre persönliche Grussbotschaft ein (max. 300 zeichen).
                </p>
                <textarea className={"checkout-stepone-textarea"} name="" id="" cols="30" rows="10" placeholder={"Grussbotschaft eingeben"}/>
            </Modal>
        </>
    )
}

export default StepOneModal