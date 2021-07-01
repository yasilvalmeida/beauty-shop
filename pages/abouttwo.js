import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import AboutTwoScene from "../scenes/abouttwo";
const AboutTwo = () => {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
                <AboutTwoScene/>
            <Footer/>
        </>
    );
}
export async function getStaticProps() {
    return {
        props: {},
    };
}

export default AboutTwo