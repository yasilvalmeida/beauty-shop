import InspirationSection from "../../../../shareable/Inspiration";
import { useSelector } from "react-redux";

const Inspiration = () => {
  const { inspirationOneTextData } = useSelector((state) => state.landing);
  return (
    <>
      <InspirationSection inspiration={inspirationOneTextData} />
    </>
  );
};

export default Inspiration;
