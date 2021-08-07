import Link from "next/link";
import { useSelector } from "react-redux";

const FooterNavigation = ({footerData}) => {
    const navList = useSelector((state) => state.navbar.navList);
    const top10Categories = navList.slice(0, 10);
    const dpab = ["Friedrich-Ebert-Straße 13 61476 Kronberg","Öffnungszeiten: Mo-fr 09-18 Uhr Sa 12-16 Uhr"]
    const kontoUrl =  [
      "/registrieren", 
      "/login", 
      "/konto/nutzerdaten", 
      "/parfum", 
      "/zurkasse", 
      "/konto/whishlist", 
      "/newsletter", 
      "/konto/lesezeichen"
    ]

    return (
      <div className={"footer__navigation__container"}>
        <div className={"footer__navigation__container__body"}>
          <div className={"footer__navigation__container__body__item"}>
            <h2>Kontakt</h2>
            {footerData[0]?.map((e, i) => {
              if (e?.title.includes("Email")) {
                return (
                  <p key={i}>
                    <a href={`mailto:${e?.value}`}>
                      {e?.title} {e?.value}
                    </a>
                  </p>
                );
              } else if (e?.title.includes("Telefon:")) {
                return (
                  <p key={i}>
                    <a href={`tel:${e?.value}`}>
                      {e?.title} {e?.value}
                    </a>
                  </p>
                );
              } else {
                return (
                  <p key={i}>
                    {e?.title}
                    {e?.value}
                  </p>
                );
              }
            })}
          </div>
          <div className={"footer__navigation__container__body__item1"}>
            <h2>Dpab Store</h2>
            {footerData[1]?.map((e, i) => {
              return (
                <p key={i}>
                  {e?.title}
                  {e?.value1}
                  {e?.value2}
                </p>
              );
            })}
          </div>
          <div className={"footer__navigation__container__body__item2"}>
            <h2>Online Shop</h2>
            {top10Categories?.map((e, i) => {
              return (
                <li key={i}>
                  <Link exact href={`${e?.url}`}>
                    <a>{e?.name}</a>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className={"footer__navigation__container__body__item3"}>
            <h2>Mein Konto</h2>
            {footerData[3]?.map((e, i) => {
              return (
                <li key={i}>
                  <Link exact href={kontoUrl[i]}>
                    <a>{e?.title}</a>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default FooterNavigation