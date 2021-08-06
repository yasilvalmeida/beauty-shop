import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from "next/router";

const Neuigkeiten = ({
  background,
  color,
  paddingTop,
  paddingBottom,
  btntext,
  width,
  padd,
  neuigkeiten,
  neuigkeitenSecond
}) => {
  const magazineUrl = "/magazine";
  const router = useRouter()
  return (
    <>
      <div
        className={"prodbotbodall"}
        style={{
          backgroundColor: background,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
        }}
      >
        <div className={"first-product-bottom-body"}>
          <div className={"col-lg-6 product-bottom-left d-flex"}>
            <div className={"prod-bot-left-img"}>
              <h2 style={{ color: color }}>NEUIGKEITEN</h2>
              <img
                src={neuigkeiten?.images?.url || "/productbotleft.png"}
                layout="responsive"
              />
            </div>
            <div className={"prod-bod-left-txt"}>
              <p style={{ color: color }}>{neuigkeiten?.header}</p>
              <h2 style={{ color: color }}>{neuigkeiten?.title}</h2>
              <span style={{ color: color }}>{neuigkeiten?.text}</span>
              <button
                className={"filter-bot-btn"}
                onClick={() => router.push(`${magazineUrl}`)}
                style={{
                  color: background,
                  backgroundColor: color,
                  width: width,
                  padding: padd,
                }}
              >
                {neuigkeiten?.link_text}{" "}
              </button>
            </div>
          </div>
          <div className={"product-bottom-middle"}></div>
          <div className={"col-lg-6 product-bottom-right d-flex"}>
            <p style={{ color: color }}>{neuigkeitenSecond?.header}</p>
            <h2 style={{ color: color }}>{neuigkeitenSecond?.title}</h2>
            <span style={{ color: color }}>{neuigkeitenSecond?.text}</span>
            <div className={"prod-bot-right-img"}>
              <img
                src={neuigkeitenSecond?.images?.url || "/productbotright.png"}
              />
            </div>
            <br />
            <button
              className={""}
              onClick={() => router.push(`${magazineUrl}`)}
              style={{
                color: background,
                backgroundColor: color,
                width: width,
                display: "flex",
                margin: "auto",
              }}
            >
              {neuigkeitenSecond?.link_text}{" "}
            </button>
          </div>
        </div>
        <button
          className={"filter-bot-btn"}
          onClick={() => router.push(`${magazineUrl}`)}
          style={{
            color: background,
            backgroundColor: color,
            width: width,
            padding: padd,
          }}
        >
          {btntext}{" "}
        </button>
      </div>
    </>
  );
};

export default Neuigkeiten;
