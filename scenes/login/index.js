import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import LoginForm from "./compoents/LoginForm";
import Loader from "../../shareable/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getLoginPageText,
  getUserDataFromLocalStorage,
} from "../../services/actions/auth";

const LoginScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { loginPageTextLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getLoginPageText(lang));
  }, [lang]);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  return (
    <>
      <Header />
      <MobileHeader />
      {loginPageTextLoading ? <Loader type={"component"} /> : <LoginForm />}
      <Footer />
    </>
  );
};
export default LoginScene;
