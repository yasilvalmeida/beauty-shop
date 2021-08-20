import PageHeader from "../../../layouts/header/Header";
import MobileHeader from "../../../layouts/mobile-header/MobileHeader";
import Footer from "../../../layouts/footer/Footer";
import CustomStep from "./components/steps/CustomStep";
const { Step } = Steps;
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Space, Spin, Steps, Popover } from "antd";
import {
  getCheckoutPageData,
  getCheckoutPageStepData,
} from "../../../services/actions/checkout";
import StepOne from "./components/step-one/StepOne";
import StepTwo from "./components/step-two/StepTwo";
import StepThree from "./components/step-three/StepThree";
import StepFour from "./components/step-four/StepFour";

const CheckoutStepScene = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const {
    checkoutPageData,
    checkoutPageLoading,
    checkoutPageStepData,
    checkoutPageStepLoading,
  } = useSelector((state) => state.checkout);
  const [stepNum, setStepnum] = useState(1);
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    }
    if (stepNum < steps.length) {
      setStepnum(stepNum + 1);
    }
    router.push({
      pathname: `/checkout/step${stepNum}`,
    });
  };
  /* const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
    if (stepNum > 1) {
      setStepnum(stepNum - 1);
    }
  }; */
  const [steps, setSteps] = useState([
    {
      id: 0,
      step: true,
    },
    {
      id: 1,
      step: false,
    },
    {
      id: 2,
      step: false,
    },
    {
      id: 3,
      step: false,
    },
  ]);

  useEffect(() => {
    router.push({
      pathname: `/checkout/step${stepNum}`,
    });
  }, [stepNum, current]);

  useEffect(() => {
    dispatch(getCheckoutPageStepData(lang));
    dispatch(getCheckoutPageData(lang));
  }, [lang]);

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      <CustomStep index={index + 1} />
    </Popover>
  );

  return (
    <>
      <PageHeader />
      <MobileHeader />
      {checkoutPageStepLoading && checkoutPageLoading ? (
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <div className={"checkout__step__scene__body"}>
          <div className={"checkout__step__scene__body__header"}>
            <Steps
              current={current}
              responsive={true}
              labelPlacement={"vertical"}
            >
              {steps.map((e, i) => {
                return (
                  <Step
                    title={
                      i === 0
                        ? checkoutPageStepData?.step_one_header
                        : i === 1
                        ? checkoutPageStepData?.step_two_header
                        : i === 2
                        ? checkoutPageStepData?.step_two_header
                        : checkoutPageStepData?.step_two_header
                    }
                    num={e.id}
                    key={i}
                    status={current === stepNum - 1 ? "wait" : "current"}
                  />
                );
              })}
            </Steps>
            <div className={"checkout__step__scene__body__scenes"}>
              {router.query.id === "step1" && (
                <StepOne
                  checkoutPageData={checkoutPageData}
                  checkoutPageStepData={checkoutPageStepData}
                  next={next}
                />
              )}
              {router.query.id === "step2" && (
                <StepTwo
                  checkoutPageStepData={checkoutPageStepData}
                  next={next}
                />
              )}
              {router.query.id === "step3" && (
                <StepThree
                  checkoutPageStepData={checkoutPageStepData}
                  next={next}
                />
              )}
              {router.query.id === "step4" && (
                <StepFour
                  checkoutPageData={checkoutPageData}
                  checkoutPageStepData={checkoutPageStepData}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CheckoutStepScene;
