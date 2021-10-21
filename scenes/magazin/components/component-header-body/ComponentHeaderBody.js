import MagazinComponentHeader from "./component-header/ComponentHeader";
import ComponentHeaderBottom from "./component-header/component-header-bottom/ComponentHeaderBottom";
import ComponentHeaderBottomMobile from "./component-header/component-header-bottom/ComponentHeaderBottomMobile";
import { useSelector } from "react-redux";

const ComponentHeaderBody = () => {
  const { magazinePageTextData } = useSelector((state) => state.magazine);
  const defaultBackgroundUrl = `url(${
    magazinePageTextData?.header_image?.length > 0
      ? magazinePageTextData?.header_image[0]?.url
      : "/magazin/magazinbackground2.png"
  })`;
  return (
    <div
      className={"component__header__body__all"}
      style={{ backgroundImage: defaultBackgroundUrl }}
    >
      <MagazinComponentHeader />
      <ComponentHeaderBottomMobile />
      <ComponentHeaderBottom />
    </div>
  );
};

export default ComponentHeaderBody;
