import ComponentHeader from "../../../../../shareable/component-header/ComponentHeader";
import MediatekInfoMagazin from "./mediatek-info/MediatekInfoMagazin";
import { useSelector } from "react-redux";

const MagazinComponentHeader = () => {
  const { magazinePageTextData } = useSelector((state) => state.magazine);
  const bg = "rgba(0,0,0,.5)";
  const color = "white";
  const color2 = "black";
  const textstyle = "uppercase";
  return (
    <div className={"magazin__container__header"}>
      <ComponentHeader
        info={magazinePageTextData?.header_info}
        title={magazinePageTextData?.header_title}
        bg={bg}
        color={color}
        color2={color2}
        textstyle={textstyle}
      />
      <MediatekInfoMagazin />
    </div>
  );
};

export default MagazinComponentHeader;
