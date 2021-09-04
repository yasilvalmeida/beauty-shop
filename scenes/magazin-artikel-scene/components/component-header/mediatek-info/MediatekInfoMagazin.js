import { useSelector } from "react-redux";

const MediatekInfoMagazinArtikel = () => {
  const { magazineOnePageTextData } = useSelector((state) => state.magazine);
  return (
    <div className={"magazin__container__header__buttons"}>
      <button>{magazineOnePageTextData?.header_button_beauty}</button>
      <button>{magazineOnePageTextData?.header_button_interieur}</button>
      <button>{magazineOnePageTextData?.header_button_well_beeing}</button>
      <button>{magazineOnePageTextData?.header_button_travel}</button>
    </div>
  );
};

export default MediatekInfoMagazinArtikel;
