import StepOneSingleProduct from "../../../../../shareable/Products/checkout-ptoducts/step-one/StepOneSingleProduct";
import { useState } from "react";
import StepOneModal from "./modal/StepOneModal";

const StepOne = ({ checkoutPageData, checkoutPageStepData, next, prev }) => {
  const data = [1, 2, 3];
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
  return (
    <div className={"checkout__stepone__container"}>
      <div className={"checkout__stepone__container__title"}>
        <p>{checkoutPageStepData?.step_one_page_header}</p>
      </div>
      <div className={"checkout__stepone__container__products"}>
        {data.map((e, i) => {
          return (
            <StepOneSingleProduct key={i} checkoutPageData={checkoutPageData} />
          );
        })}
      </div>
      <div className={"checkout__stepone__container__bottom"}>
        <p className={"checkout__stepone__container__bottom--title"}>
          {checkoutPageData?.order_overview}
        </p>
        <div className={"checkout__stepone__container__bottom__item"}>
          <p className={"checkout__stepone__container__bottom__item--text"}>
            {checkoutPageData?.subtotal}
          </p>
          <p className={"checkout__stepone__container__bottom__item--price"}>
            € 23,33
          </p>
        </div>
        <div className={"checkout__stepone__container__bottom__item"}>
          <p className={"checkout__stepone__container__bottom__item--text"}>
            {checkoutPageData?.vat}
          </p>
          <p className={"checkout__stepone__container__bottom__item--price"}>
            € 4,67
          </p>
        </div>
        <div className={"checkout__stepone__container__bottom__item"}>
          <p
            className={
              "checkout__stepone__container__bottom__item--text last-checkout-one-step-txt"
            }
          >
            {checkoutPageData?.total}
          </p>
          <p
            className={
              "checkout__stepone__container__bottom__item--price last-checkout-one-step-price"
            }
          >
            € 28,00
          </p>
        </div>
        <button onClick={showModal}>
          {checkoutPageStepData?.step_one_button}
        </button>
        <StepOneModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          checkoutPageStepData={checkoutPageStepData}
          next={next}
        />
      </div>
    </div>
  );
};

export default StepOne;
