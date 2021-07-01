import LoginScene from "../scenes/login";
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import MobileHeader from "../layouts/mobile-header/MobileHeader";
const Login = () => {
    return (
        <>
            <Header/>
            <MobileHeader/>
            <LoginScene />

        </>
    );
};

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default Login;
