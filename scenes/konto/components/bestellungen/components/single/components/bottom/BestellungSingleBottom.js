import { useSelector } from "react-redux";

const BestellungSingleBottom = ({ e }) => {
    const { kontoPageTextData } = useSelector((state) => state.konto);
  return (
    <div className={"bestellungen__single__bottom"}>
      <p className={"bestellungen__single__bottom__left"}>
        {kontoPageTextData?.order_total}
      </p>
      <div className={"bestellungen__single__bottom__right"}>
        <p className={"bestellungen__single__bottom__right__title"}>
          {kontoPageTextData?.order_invoice}
        </p>
        <div className={"bestellungen__single__bottom__right__info"}>
          <div className={"bestellungen__single__bottom__right__info__block"}>
            <div className={"item"}>
              <p className={"left"}>
                {kontoPageTextData?.order_sub_total}:{" "}
              </p>
              <p>{e.price}</p>
            </div>
            <div className={"item"}>
              <p className={"left"}>{kontoPageTextData?.order_vat}</p>
              <p>0,00</p>
            </div>
          </div>
          <div className={"bestellungen__single__bottom__right__info__block"}>
            <div className={"item"}>
              <p className={"left"}>
                {kontoPageTextData?.order_total}
              </p>
              <p>{e.price}</p>
            </div>
            <p className={"inkl"}>
              {kontoPageTextData?.order_vat_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestellungSingleBottom;
