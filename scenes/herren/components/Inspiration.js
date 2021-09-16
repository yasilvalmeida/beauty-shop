import InspirationSection from "../../../shareable/Inspiration";
import { useSelector } from "react-redux";

const Inspiration = () => {
  const { herrenInspirationOneTextData } = useSelector((state) => state.herren);
  const background = "black";
  const color = "white";
  const padding = "10px";
  return (
    <InspirationSection
      inspiration={herrenInspirationOneTextData}
      background={background}
      color={color}
      padding={padding}
    />
  );
};
export default Inspiration;
