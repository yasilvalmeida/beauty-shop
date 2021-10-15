import MagazinArtikelComponentHeader from "./head/MagazinArtikelComponentHeader";
import TextPart from "./text-part/TextPart";
import { useSelector } from "react-redux";

const ArtikelComponentHeaderBody = () => {
  const { magazinePageTextData } = useSelector((state) => state.magazine);
  const url = "";
  return (
    <div
      className={"component__header__body__all__artikel"}
      style={{
        backgroundImage: `url(${
          magazinePageTextData?.header_image?.length > 0
            ? magazinePageTextData?.header_image[0]?.url
            : url
        })`,
      }}
    >
      <MagazinArtikelComponentHeader />
      <div></div>
      <TextPart />
    </div>
  );
};

export default ArtikelComponentHeaderBody;
