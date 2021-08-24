import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypentestStepOneData,
  getTypentestStepTwoData,
  getTypentestStepThreeData,
  getTypentestStepFourData,
} from "../../../../services/actions/typentest";

export default function ErgebnisProduct() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const {
    typentestStepOneData,
    typentestStepTwoData,
    typentestStepThreeData,
    typentestStepFourData,
  } = useSelector((state) => state.typentest);
  const { pageText, parameters } = useSelector((state) => state.ergebnis);
  useEffect(() => {
    dispatch(getTypentestStepOneData(lang));
    dispatch(getTypentestStepTwoData(lang));
    dispatch(getTypentestStepThreeData(lang));
    dispatch(getTypentestStepFourData(lang));
  }, [lang]);

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
        <p className="mobile__text">{pageText?.subheader}</p>
        <h2>{pageText?.header}</h2>
        <p className="text">{pageText?.subheader}</p>

        <div className="ergebnis__product__title--parfumTypes">
          {parameters?.map((parameter, index) => {
            let item = "";
            switch (parameter?.type) {
              case "gender":
                switch (parameter?.value) {
                  case "radio_one":
                    item = typentestStepOneData?.radio_one;
                    break;
                  case "radio_two":
                    item = typentestStepOneData?.radio_two;
                    break;
                  case "radio_three":
                    item = typentestStepOneData?.radio_three;
                    break;
                }
                break;
              case "favorite":
                switch (parameter?.value) {
                  case 1:
                    item = typentestStepTwoData?.text_one;
                    break;
                  case 2:
                    item = typentestStepTwoData?.text_two;
                    break;
                  case 3:
                    item = typentestStepTwoData?.text_three;
                    break;
                  case 4:
                    item = typentestStepTwoData?.text_four;
                    break;
                  case 5:
                    item = typentestStepTwoData?.text_five;
                    break;
                  case 6:
                    item = typentestStepTwoData?.text_six;
                    break;
                  case 7:
                    item = typentestStepTwoData?.text_seven;
                    break;
                  case 8:
                    item = typentestStepTwoData?.text_eight;
                    break;
                }
                break;
              case "occasion":
                switch (parameter?.value) {
                  case 1:
                    item = typentestStepThreeData?.text_one;
                    break;
                  case 2:
                    item = typentestStepThreeData?.text_two;
                    break;
                  case 3:
                    item = typentestStepThreeData?.text_three;
                    break;
                  case 4:
                    item = typentestStepThreeData?.text_four;
                    break;
                }
                break;
              case "style":
                switch (parameter?.value) {
                  case 1:
                    item = typentestStepFourData?.text_one;
                    break;
                  case 2:
                    item = typentestStepFourData?.text_two;
                    break;
                  case 3:
                    item = typentestStepFourData?.text_three;
                    break;
                  case 4:
                    item = typentestStepFourData?.text_four;
                    break;
                  case 5:
                    item = typentestStepFourData?.text_five;
                    break;
                }
                break;
            }
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
