import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Neuigkeiten = ({
  background,
  color,
  paddingTop,
  paddingBottom,
  btntext,
  width,
  padd,
  neuigkeiten,
  neuigkeitenSecond,
}) => {
  const lang = useSelector((state) => state.header.headerLanguage);
  const magazineUrl = "/magazine";
  const router = useRouter();
  const main_header = [
    {
      lang: "de",
      value: "NEUIGKEITEN",
    },
    {
      lang: "en",
      value: "NEWS",
    },
    {
      lang: "fr",
      value: "NOUVELLES",
    },
  ];
  const [header, setHeader] = useState(main_header[0]?.value);

  useEffect(() => {
    const selectedHeader = main_header?.find((item) => item?.lang === lang);
    setHeader(selectedHeader?.value);
  }, [lang]);

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
              <h2 style={{ color: color }}>{header}</h2>
              <Link href={magazineUrl}>
                <a href={magazineUrl}>
                  <Image
                    src={neuigkeiten?.images?.url || "/aaa.jpg"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"prod-bod-left-txt"}>
              <p style={{ color: color }}>{neuigkeiten?.header}</p>
              <Link href={magazineUrl}>
                <h2 style={{ color: color, cursor: "pointer" }}>
                  {neuigkeiten?.title}
                </h2>
              </Link>
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
            <Link href={magazineUrl}>
              <h2 style={{ color: color, cursor: "pointer" }}>
                {neuigkeitenSecond?.title}
              </h2>
            </Link>
            <span style={{ color: color }}>{neuigkeitenSecond?.text}</span>
            <div className={"prod-bot-right-img"}>
              <Link href={magazineUrl}>
                <a href={magazineUrl}>
                  <Image
                    src={neuigkeitenSecond?.images?.url || "/aaa.jpg"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
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
