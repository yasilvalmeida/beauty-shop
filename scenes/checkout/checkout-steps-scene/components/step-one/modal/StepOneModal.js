import { Modal } from "antd";
const StepOneModal = ({
  isModalVisible,
  setIsModalVisible,
  checkoutPageStepData,
  next,
}) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title={checkoutPageStepData?.step_one_modal_title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1500}
        footer={[
          <button
            className={"checkout-modal-btn-step-one"}
            onClick={next}
            key="choose_free_sample"
          >
            {checkoutPageStepData?.step_one_modal_button}
          </button>,
        ]}
      >
        <p className={"checkout-modal-text"}>
          {checkoutPageStepData?.step_one_modal_paragraph}
        </p>
        <textarea
          className={"checkout-stepone-textarea"}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder={
            checkoutPageStepData?.step_one_modal_textarea_placeholder
          }
        />
      </Modal>
    </>
  );
};

export default StepOneModal;
