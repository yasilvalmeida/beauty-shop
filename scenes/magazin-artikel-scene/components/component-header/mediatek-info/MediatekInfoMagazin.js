import { useSelector } from "react-redux";

const MediatekInfoMagazinArtikel = () => {
  const { magazinePageTextData } = useSelector((state) => state.magazine);
  return (
    <div className={"magazin__container__header__buttons"}>
      <button>{magazinePageTextData?.header_button_beauty}</button>
      <button>{magazinePageTextData?.header_button_interieur}</button>
      <button>{magazinePageTextData?.header_button_well_beeing}</button>
      <button>{magazinePageTextData?.header_button_travel}</button>
    </div>
  );
};

export default MediatekInfoMagazinArtikel;
