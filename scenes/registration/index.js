import RegistrationHeader from "./components/registration-header/RegistrationHeader";
import Header from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import RegistrationForm from "./components/registration-form/RegistrationForm";
import RegistrationInfo from "./components/registration-info/RegistrationInfo";
import Loader from "../../shareable/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegisterCountries,
  getRegisterTextData,
} from "../../services/actions/registration";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";

const RegistrationScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { textDataLoaded, textData } = useSelector(
    (state) => state.registration
  );

  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    //dispatch(getRegisterCountries())
    dispatch(getRegisterTextData(lang));
  }, [lang]);

  return (
    <>
      <Header />
      <MobileHeader />
      {textDataLoaded ? (
        <Loader type={"component"} />
      ) : (
        <div className={"registration__page__body"}>
          {/* <Loader type={"component"} /> */}
          <RegistrationHeader textData={textData} />
          <div className={"registration__page__body__formandtext"}>
            <RegistrationForm textData={textData} />
            <RegistrationInfo textData={textData} />
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationScene;
