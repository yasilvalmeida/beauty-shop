import CheckoutScene from "../scenes/checkout";

const Checkout = () => {
  return (
    <>
      <CheckoutScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Checkout;
