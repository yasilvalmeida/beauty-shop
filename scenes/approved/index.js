import PageHeader from "../../layouts/header/Header";
import MobileHeader from "../../layouts/mobile-header/MobileHeader";
import Footer from "../../layouts/footer/Footer";
import HeadTextThree from "./components/headtext/HeadText";
import SecondAboutSectionThree from "./components/secondsection/SecondSection";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import { getApprovedData } from "../../services/actions/approved";
import Loader from "../../shareable/Loader";

const ApprovedScene = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const loading = useSelector((state) => state.approved.approvedDataLoading);
  const approvedData = useSelector((state) => state.approved.approvedData);
  const {
    approved_by_us,
    approved_by_us_text,
    header,
    images,
    right_header_of_the_image,
    right_text1_of_the_image,
    right_text2_of_the_image,
  } = approvedData;
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
    dispatch(getApprovedData(lang));
  }, [lang]);
  return (
    <>
      <PageHeader />
      <MobileHeader />
      <div className={"approved-body"}>
        {loading ? (
          <Loader type={"component"} />
        ) : (
          <>
            <HeadTextThree
              approved_by_us={approved_by_us}
              approved_by_us_text={approved_by_us_text}
              header={header}
            />
            <SecondAboutSectionThree
              images={images}
              right_header_of_the_image={right_header_of_the_image}
              right_text1_of_the_image={right_text1_of_the_image}
              right_text2_of_the_image={right_text2_of_the_image}
            />
            <Social />
            <NewsletterRep />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ApprovedScene;
