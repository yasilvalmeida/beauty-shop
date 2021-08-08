import HeadTextThree from "./components/headtext/HeadText";
import SecondAboutSectionThree from "./components/secondsection/SecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";

const ApprovedScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  return (
    <>
      <div className={"approved-body"}>
        <HeadTextThree />
        <SecondAboutSectionThree />
        <Social />
        <NewsletterRep />
      </div>
    </>
  );
};

export default ApprovedScene;
