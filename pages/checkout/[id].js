import CheckoutStepScene from "../../scenes/checkout/checkout-steps-scene/CheckoutStepScene";

const CheckoutStep = () => {
  return (
    <>
      <CheckoutStepScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "step1" } },
      { params: { id: "step2" } },
      { params: { id: "step3" } },
      { params: { id: "step4" } },
    ],
    fallback: false,
  };
}

export default CheckoutStep;
