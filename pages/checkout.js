import PageHeader from '../layouts/header/Header'
import MobileHeader from '../layouts/mobile-header/MobileHeader'
import Footer from '../layouts/footer/Footer'
import CheckoutScene from "../scenes/checkout";

const Checkout = () => {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <CheckoutScene/>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Checkout