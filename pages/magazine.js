import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import MagazinScene from "../scenes/magazin";
const Magazine = () => {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <MagazinScene />
      <Footer />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}
export default Magazine;
