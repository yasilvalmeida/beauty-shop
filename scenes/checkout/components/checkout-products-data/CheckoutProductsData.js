import { Collapse } from "antd";
import { useState } from "react";
import CheckoutModal from "../checkout-modal/CheckoutModal";

const CheckoutProductsData = ({ checkoutPageData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const { Panel } = Collapse;
  return (
    <div className={"checkout_prod_data"}>
      <div className={"checkout__products__data__container"}>
        <div className={"checkout__products__data__container__toptxt"}>
          <h2 className={"checkout__products__data__container__toptxt--title"}>
            {checkoutPageData?.order_overview}
          </h2>
          <div className={"checkout__products__data__container__toptxt__item"}>
            <p>{checkoutPageData?.subtotal}</p>
            <p>€ 23,33</p>
          </div>
          <div className={"checkout__products__data__container__toptxt__item"}>
            <p>{checkoutPageData?.vat}</p>
            <p>€ 4,67</p>
          </div>
          <div className={"checkout__products__data__container__toptxt__item"}>
            <p>{checkoutPageData?.total}</p>
            <p>€ 28,00</p>
          </div>
          <button onClick={showModal}>{checkoutPageData?.checkout}</button>
        </div>
        <div className={"checkout__products__data__container__collapse"}>
          <Collapse expandIconPosition="right" ghost="true">
            <Panel header={checkoutPageData?.need_help_header}>
              {checkoutPageData?.need_help_content}
            </Panel>
            <Panel header={checkoutPageData?.shipping_information_header}>
              {checkoutPageData?.shipping_information_content}
            </Panel>
            <Panel header={checkoutPageData?.exchange_and_refund_header}>
              {checkoutPageData?.exchange_and_refund_content}
            </Panel>
          </Collapse>
        </div>
      </div>
      <CheckoutModal
        checkoutPageData={checkoutPageData}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default CheckoutProductsData;
