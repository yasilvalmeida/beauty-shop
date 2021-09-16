import InspirationBottomOneRep from "../../../shareable/InsprationBottomOneRep";
import { useSelector } from "react-redux";

const InspirationBottomOne = () => {
  const { herrenInspirationTwoTextData } = useSelector((state) => state.herren);
  const background = "black";
  const color = "white";
  return (
    <>
      <InspirationBottomOneRep
        inspiration={herrenInspirationTwoTextData}
        background={background}
        color={color}
      />
    </>
  );
};
export default InspirationBottomOne;
