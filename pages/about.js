import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import AboutScene from "../scenes/about";

const About = () => {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <AboutScene />
      <Footer />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
