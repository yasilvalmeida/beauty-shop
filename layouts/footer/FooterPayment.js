const FooterPayment = ({ footerPayment }) => {
  return (
    <div className="payment__section__container">
      <div className={"footerpaymentbod"}>
        {footerPayment?.map((payment, i) => {
          const { text, image } = payment;
          return (
            <div
              className={
                text === "Zahlungsarten"
                  ? "zahlungitem"
                  : text === "Master Card"
                  ? "mastercarditem"
                  : text === "Vorkasse"
                  ? "vorkasseitem"
                  : text === "Versandarten"
                  ? "versandartenitem"
                  : text === "DHL"
                  ? "dhlitem"
                  : ""
              }
              key={i}
            >
              <img src={image?.length > 0 ? image[0]?.url : ""} alt={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterPayment;
