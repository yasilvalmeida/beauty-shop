import { useSelector } from "react-redux";

const BestellungSingleMiddle = ({ e }) => {
  const { kontoPageTextData } = useSelector((state) => state.konto);
  return (
    <div className={"bestellungen__single__middle"}>
      <div className={"bestellungen__single__middle__left"}>
        <p className={"bestellungen__single__middle__left__title"}>
          Zugelslett: 22.05.2021
        </p>
        <div className={"bestellungen__single__middle__left__item"}>
          <div
            className={"bestellungen__single__middle__left__item__img__block"}
          >
            <img src="/item.png" alt="/item.png" />
          </div>
          <div
            className={"bestellungen__single__middle__left__item__info__block"}
          >
            <p className={"title"}>Ylumi</p>
            <p className={"type"}>Energy</p>
            <p className={"quantity"}> 1 packung </p>
          </div>
        </div>
      </div>
      <div className={"bestellungen__single__middle__right"}>
        <p className={"title"}>{kontoPageTextData?.order_track}</p>
        <p className={"price"}>{e.price}</p>
      </div>
    </div>
  );
};

export default BestellungSingleMiddle;
