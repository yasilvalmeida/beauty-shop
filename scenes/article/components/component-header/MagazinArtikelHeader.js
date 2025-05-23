import MagazinArtikelComponentHeader from "./head/MagazinArtikelComponentHeader";
import TextPart from "./text-part/TextPart";
import { useSelector } from "react-redux";

const ArtikelComponentHeaderBody = () => {
  const { magazinePageTextData } = useSelector((state) => state.magazine);
  return (
    <div
      className={"component__header__body__all__artikel"}
      style={{
        backgroundImage: `url(${
          magazinePageTextData?.header_image?.length > 0
            ? magazinePageTextData?.header_image[0]?.url
            : ""
        })`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <MagazinArtikelComponentHeader />
      {/* <TextPart /> */}
    </div>
  );
};

export default ArtikelComponentHeaderBody;
