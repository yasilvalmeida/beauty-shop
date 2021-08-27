import HeadTextShareable from "../../../../shareable/about/head-text/HeadText";
import { useSelector } from "react-redux";

const HeadTextLexikon = () => {
  const { lexikonPageTextData } = useSelector((state) => state.lexikon);
  return (
    <div className={"lexikon__headtext__container"}>
      <HeadTextShareable
        text1={lexikonPageTextData?.title}
        text2={lexikonPageTextData?.header}
        text3={lexikonPageTextData?.text}
      />
    </div>
  );
};
export default HeadTextLexikon;
