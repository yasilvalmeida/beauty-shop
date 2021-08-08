import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import ApprovedScene from "../scenes/approved";
const Approved = () => {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <ApprovedScene />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Approved;
