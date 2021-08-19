import FooterPayment from "./FooterPayment";
import FooterNav from "./FooterNav";
import FooterBottom from "./FooterBottom";
import FooterNavigation from "./FooterNavigation";
import FooterCopyright from "./FooterCopyright";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFooterContact,
  getFooterTop,
  getFooterPayment,
  getFooterDPAB,
  getFooterMainMenu,
} from "../../services/actions/footer";

const Footer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.navbar.selectedLanguage);
  const {
    footerTop,
    footerContact,
    footerPayment,
    footerDPAB,
    footerMainMenu,
  } = useSelector((state) => state.footer);
  useEffect(() => {
    dispatch(getFooterContact(lang));
    dispatch(getFooterTop(lang));
    dispatch(getFooterPayment(lang));
    dispatch(getFooterDPAB(lang));
    dispatch(getFooterMainMenu(lang));
  }, [lang]);
  return (
    <>
      <FooterPayment footerPayment={footerPayment} />
      <FooterNav footerTop={footerTop} />
      <FooterNavigation
        footerContact={footerContact}
        footerDPAB={footerDPAB}
        footerMainMenu={footerMainMenu}
      />
      <FooterCopyright />
      <FooterBottom />
    </>
  );
};

export default Footer;
