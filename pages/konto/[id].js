import PageHeader from '../../layouts/header/Header'
import MobileHeader from '../../layouts/mobile-header/MobileHeader'
import KontoScene from '../../scenes/konto/index'
import Footer from '../../layouts/footer/Footer'

const Konto = () => {
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <KontoScene />
      <Footer />
    </>
  );
}
export async function getStaticProps() {
    return {
        props:{}
    };
}

export async function getStaticPaths() {
    return {
        paths:[
            {params: {id: "main"}},
            {params: {id: "adressen"}},
            {params: {id: "nutzerdaten"}},
            {params: {id: "bestellungen"}},
            {params: {id: "whishlist"}},
            {params: {id: "newsletter"}},
            {params: {id: "meine"}},
            {params: {id: "lesezeichen"}},
        ],
        fallback:false
    };
}


export default Konto