import InspirationBottomTwoRep from "../../../../shareable/InspirationBottomTwoRep";
import { useSelector } from "react-redux";

const InspirationBottomTwo = () => {
  const { inspirationThreeTextData } = useSelector((state) => state.landing);
  return (
    <>
      <InspirationBottomTwoRep inspiration={inspirationThreeTextData} />
    </>
  );
};

export default InspirationBottomTwo;
