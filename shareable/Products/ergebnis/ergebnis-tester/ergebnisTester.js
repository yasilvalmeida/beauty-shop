import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function ErgebnisTester() {
  const { pageText } = useSelector((state) => state.ergebnis);
  return (
    <div className="ergebnis__tester">
      <div className="ergebnis__tester__title">
        <h2>{pageText?.tester_header}</h2>
        <p>{pageText?.tester_content}</p>
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
