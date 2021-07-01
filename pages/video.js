import PageHeader from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import VideoScene from "../scenes/video";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
const Video = () =>{
    return (
        <>
            <PageHeader />
            <MobileHeader/>
               <VideoScene />
            <Footer/>
        </>
    );
}
export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Video