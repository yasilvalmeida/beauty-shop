import { useSelector } from "react-redux";

const BestellungSingleTop = ({ e, setShow }) => {
  const { kontoPageTextData } = useSelector((state) => state.konto);
  return (
    <div className={"bestellungen__single__top"}>
      <div className={"bestellungen__single__top__left"}>
        <div className={"bestellungen__single__top__left__item"}>
          <p className={"bestellungen__single__top__left__item__title"}>
            {kontoPageTextData?.order_date}
          </p>
          <p>{e.date}</p>
        </div>
        <br />
        <div className={"bestellungen__single__top__left__item"}>
          <p className={"bestellungen__single__top__left__item__title"}>
            {kontoPageTextData?.order_payment_method}
          </p>
          <p>PayPal</p>
        </div>
        <div className={"bestellungen__single__top__left__far"}>
          <p className={"bestellungen__single__top__left__far__title"}>
            {kontoPageTextData?.order_status}
          </p>
          <p>Zahlungstet ertflogita</p>
        </div>
      </div>
      <div className={"bestellungen__single__top__right"}>
        <button onClick={() => setShow(false)}>
          {kontoPageTextData?.adress_back}
        </button>
        <a href="#">{kontoPageTextData?.order_send_question}</a>
      </div>
    </div>
  );
};

export default BestellungSingleTop;
