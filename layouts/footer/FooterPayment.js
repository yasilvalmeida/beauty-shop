import Image from 'next/image';

const FooterPayment = () => {
  return (
    <div className="payment__section__container">
      <div className={"footerpaymentbod"}>
        <div className={"zahlungitem"}>
          <img src="/payment_icons/zahlungsarten.png" alt="Zahlungsarten" />
        </div>
        <div>
          <img src="/payment_icons/Paypal.png" alt="Paypal" />
        </div>
        <div>
          <img src="/payment_icons/Amazon_pay.png" alt="Amazon Pay" />
        </div>
        <div>
          <img src="/payment_icons/Visa.png" alt="Visa" />
        </div>
        <div className={"mastercarditem"}>
          <img src="/payment_icons/mastercard.png" alt="Master Card" />
        </div>
        <div className={"vorkasseitem"}>
          <img src="/payment_icons/Vorkasse.png" alt="Vorkasse" />
        </div>
        <div className={"versandartenitem"}>
          <img src="/payment_icons/versandarten.png" alt="Versandarten" />
        </div>
        <div className={"dhlitem"}>
          <img src="/payment_icons/DHL.png" alt="DHL" />
        </div>
        <div>
          <img src="/payment_icons/gogreen.png" alt="Go Green" />
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
