import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
import MagazinArtikelScene from "../scenes/magazin-artikel-scene";

const Magazin = () => {
    return (
        <>
            <PageHeader />
            <MobileHeader/>
            <MagazinArtikelScene/>
            <Footer/>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Magazin