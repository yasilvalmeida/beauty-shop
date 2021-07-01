import React from "react";
import Image from "next/image";

export default function ErgebnisProduct() {
  const parfumTypes = [
    "UNISEX",
    "WÜRZIG",
    "ELEGANT",
    "FRISCH",
    "BÜRO",
    "EAU DE PARFUM",
  ];

  const parfumData = [
    {
      img: "/productbotleft.png",
      title: "HISTOIRES DE PARFUMS",
      create: "1804 - George Sand",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      parfum: "Eau de Parfum",
      price: "95,00 €",
    },
    {
      img: "/productbotleft.png",
      title: "HISTOIRES DE PARFUMS",
      create: "1804 - George Sand",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      parfum: "Eau de Parfum",
      price: "95,00 €",
    },
    {
      img: "/productbotleft.png",
      title: "HISTOIRES DE PARFUMS",
      create: "1804 - George Sand",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      parfum: "Eau de Parfum",
      price: "95,00 €",
    },
  ];

  return (
    <div className="ergebnis__product">
      <div className="ergebnis__product__title">
        <p className="mobile__text">
          AUF BASIS IHRER ERGEBNISSE, HABEN WIR DIESE DÜFTE FÜR SIE AUSGEWÄHLT
        </p>
        <h2>IHRE PERSÖNLICHE</h2>
        <p className="text">
          AUF BASIS IHRER ERGEBNISSE, HABEN WIR DIESE DÜFTE FÜR SIE AUSGEWÄHLT
        </p>

        <div className="ergebnis__product__title--parfumTypes">
          {parfumTypes.map((item, index) => {
            return <span key={index + item}>{item}</span>;
          })}
        </div>
      </div>
      {parfumData.map((item, index) => {
        return (
          <div className="ergebnis__product__parfum" key={index}>
            <Image
              src={item.img}
              alt="Picture"
              width={1720}
              height={1000}
              objectFit="cover"
            />
            <div
              className={`ergebnis__product__parfum__card ${
                index % 2 === 0 ? "product__card__left" : "product__card__right"
              }`}
            >
              <h4>{item.title}</h4>
              <span>{item.create}</span>
              <p>{item.description}</p>
              <span>{item.parfum}</span>
              <h5>{item.price}</h5>
              <button>
                QUICK SHOP
                <img src="/bag.svg" className="bag" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  viewBox="0 0 512 512"
                  color="black"
                  style={{
                    fill: "none",
                    strokeMiterlimit: "10",
                    strokeWidth: "32px",
                    width: "25px",
                  }}
                  className={"letter-svg"}
                >
                  <circle cx="176" cy="416" r="16" />
                  <circle cx="400" cy="416" r="16" />
                  <polyline points="48 80 112 80 160 352 416 352" />
                  <path d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
