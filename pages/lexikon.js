import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import LexikonScene from "../scenes/lexikon";
const Lexikon =()=> {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
            <LexikonScene/>
            <Footer/>
        </>
    );
}
export async function getStaticProps() {
    return {
        props: {},
    };
}
export default Lexikon