import InspirationBottomTwoRep from "../../../shareable/InspirationBottomTwoRep";
import { useSelector } from "react-redux";

const InspirationBottomTwo = () => {
  const { herrenInspirationThreeTextData } = useSelector((state) => state.herren);
  const background = "black";
  const color = "white";
  const padding = "10vh";
  return (
    <>
      <InspirationBottomTwoRep
        inspiration={herrenInspirationThreeTextData}
        background={background}
        color={color}
        padding={padding}
      />
    </>
  );
};
export default InspirationBottomTwo;
