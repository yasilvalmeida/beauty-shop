import React from "react";
import Image from "next/image";

export default function ErgebnisTester() {
  return (
    <div className="ergebnis__tester">
      <div className="ergebnis__tester__title">
        <h2>PERSÖNLICHE DUFTAUSWAHL ALS</h2>
        <p>
          LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM
          NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUYAM ERAT,
          SED DIAM VOLUPTUA. AT VERO EOS ET ACCUSAM ET JUSTO DUO DOLORES ET EA
          REBUM. STET CLITA KASD GUBERGREN, NO SEA TAKIMATA SANCTUS EST LOREM
          IPSUM
        </p>
      </div>
      <div className="ergebnis__tester__parfum">
        <Image
          src="/productbotleft.png"
          alt="Picture"
          width={1720}
          height={1000}
          objectFit="cover"
        />
        <div
          //   className={`ergebnis__tester__parfum__card ${
          //     index % 2 === 0 ? "tester__card__left" : "tester__card__right"
          //   }`}
          className="ergebnis__tester__parfum__card tester__card__right "
        >
          <h4>PROBE SET</h4>
          <span>Auswahl Ihrer persönlichen Düfte</span>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
          <span>Tester Set </span>
          <h5>19,00 €</h5>
          <button>IN DEN WARENKORB</button>
        </div>
      </div>
    </div>
  );
}
