import BestellungSingleTop from "./components/top/BestellungSingleTop";
import BestellungSingleMiddle from "./components/middle/BestellungSingleMiddle";
import BestellungSingleBottom from "./components/bottom/BestellungSingleBottom";
import { useSelector } from "react-redux";

const BestellungenSingle = ({ elem, setShow }) => {
  const { e } = elem;
  const { kontoPageTextData } = useSelector((state) => state.konto);
  return (
    <div className={"bestellungen__single"}>
      <h2 className={"bestellungen__single__title"}>
        {kontoPageTextData?.order_header}: {e.code}
      </h2>
      <BestellungSingleTop e={e} setShow={setShow} />
      <BestellungSingleMiddle e={e} />
      <BestellungSingleBottom e={e} />
    </div>
  );
};

export default BestellungenSingle;
