import InspirationBottomOneRep from "../../../../shareable/InsprationBottomOneRep";
import { useSelector } from "react-redux";

const InspirationBottomOne = () => {
  const { inspirationTwoTextData } = useSelector((state) => state.landing);
  return (
    <>
      <InspirationBottomOneRep inspiration={inspirationTwoTextData} />
    </>
  );
};

export default InspirationBottomOne;
