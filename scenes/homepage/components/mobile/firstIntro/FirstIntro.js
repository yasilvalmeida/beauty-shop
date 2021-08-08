import FirstShareableIntro from "../../../../../shareable/firstIntro/FirstShareableIntro";
import { useSelector } from "react-redux";

const FirstIntroMobile = () => {
  const HPFS = useSelector((state) => state.navbar.homePageSctOne);
  const homepageIntro = HPFS.find((p) => p.position === "HomePage");

  return (
    <>
      <FirstShareableIntro homepageIntro={homepageIntro} />
    </>
  );
};

export default FirstIntroMobile;
