import React from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";

const MainAcount = () => {
    const route = useRouter()
  return (
    <div className='mainAccount__container'>
      <ul className='mainAccount__container__list'>
          <li className={"mainAccount__container__list--item"}>
              <Link  href='/konto/main'>MEIN ACCOUNT</Link>
          </li>
          <li className={route.query.id === "adressen" ? "activekonto" : "mainAccount__container__list--item"}>
              <Link href='/konto/adressen'>ADRESSEN</Link>
          </li>
          <li className={route.query.id === "nutzerdaten" ? "activekonto" : "mainAccount__container__list--item"}>
              <Link href='/konto/nutzerdaten'>NUTZERDATEN</Link>
          </li>
          <li className={route.query.id === "bestellungen" ? "activekonto" : "mainAccount__container__list--item"}>
              <Link href='/konto/bestellungen'>BESTELLUNGEN</Link>
          </li>
          <li className={route.query.id === "whishlist" ? "activekonto" : "mainAccount__container__list--item"}>
              <Link href='/konto/whishlist'>WHISHLIST</Link>
          </li>
          <li className={route.query.id === "newsletter" ? "activekonto" : "mainAccount__container__list--item"}>
              <Link href='/konto/newsletter'>NEWSLETTER</Link>
          </li>
          <li className={route.query.id === "lesezeichen" ? "activekonto" : "mainAccount__container__list--item"}>
              <Link href='/konto/lesezeichen'>MEINE LESEZEICHEN</Link>
          </li>
      </ul>
    </div>
  );
};

export default MainAcount;
