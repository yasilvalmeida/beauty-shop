import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import MagazinArtikelSceneTwo from "../scenes/magazin-artikel-scene-two";
const MagazinTwo = () => {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <MagazinArtikelSceneTwo />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default MagazinTwo;
