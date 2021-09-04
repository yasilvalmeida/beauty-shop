import { useSelector } from "react-redux";

const TextPart = () => {
  const { magazineOnePageTextData } = useSelector((state) => state.magazine);
  return (
    <div className={"artikel__header__text__container"}>
      <div className={"artikel__header__text__container__body"}>
        <p>{magazineOnePageTextData?.header_bottom_title}</p>
        <h2>{magazineOnePageTextData?.header_bottom_text}</h2>
      </div>
    </div>
  );
};

export default TextPart;
