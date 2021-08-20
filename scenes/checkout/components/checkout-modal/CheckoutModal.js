import { Modal, Collapse } from "antd";
import { useRouter } from "next/router";

const CheckoutModal = ({
  checkoutPageData,
  isModalVisible,
  setIsModalVisible,
}) => {
  const { Panel } = Collapse;
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const router = useRouter();
  return (
    <>
      <Modal
        title={checkoutPageData?.modal_header}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
        footer={[
          <button
            className={"checkout-modal-btn"}
            onClick={() => router.push("/checkout/step1")}
            key="ok"
          >
            {checkoutPageData?.modal_button}
          </button>,
        ]}
      >
        <p className={"checkout-modal-text"}>
          {checkoutPageData?.modal_paragraph}
        </p>
        <div>
          <Collapse expandIconPosition="right" ghost="true">
            <Panel
              header={checkoutPageData?.modal_collapse_one_header}
              key={`${checkoutPageData?.modal_collapse_one_header}-1`}
            >
              {checkoutPageData?.modal_collapse_one_content}
            </Panel>
            <Panel
              header={checkoutPageData?.modal_collapse_two_header}
              key={`${checkoutPageData?.modal_collapse_one_header}-2`}
            >
              {checkoutPageData?.modal_collapse_two_content}
            </Panel>
            <Panel
              header={checkoutPageData?.modal_collapse_three_header}
              key={`${checkoutPageData?.modal_collapse_one_header}-3`}
            >
              {checkoutPageData?.modal_collapse_three_content}
            </Panel>
          </Collapse>
        </div>
      </Modal>
    </>
  );
};

export default CheckoutModal;
