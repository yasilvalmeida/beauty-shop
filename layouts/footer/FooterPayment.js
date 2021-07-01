import Image from 'next/image';
const FooterPayment = () => {
  return (
    <div className='payment__section__container'>
        <div className={"footerpaymentbod"}>
            <div className={"zahlungitem"}>
                <img src="/payment_icons/zahlungsarten.png" alt=""/>
            </div>
            <div>
                <img src="/payment_icons/Paypal.png" alt=""/>
            </div>
            <div>
                <img src="/payment_icons/Amazon_pay.png" alt=""/>
            </div>
            <div>
                <img src="/payment_icons/Visa.png" alt=""/>
            </div>
            <div className={"mastercarditem"}>
                <img src="/payment_icons/mastercard.png" alt=""/>
            </div>
            <div className={"vorkasseitem"}>
                <img src="/payment_icons/Vorkasse.png" alt=""/>
            </div>
            <div className={"versandartenitem"}>
                <img src="/payment_icons/versandarten.png" alt=""/>
            </div>
            <div className={"dhlitem"}>
                <img src="/payment_icons/DHL.png" alt=""/>
            </div>
            <div>
                <img src="/payment_icons/gogreen.png" alt=""/>
            </div>
        </div>
    </div>
  );
};

export default FooterPayment;
