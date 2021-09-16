import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Neuigkeiten = ({
  background,
  color,
  paddingTop,
  paddingBottom,
  btntext,
  width,
  padd,
}) => {
  const { newsSectionTextData } = useSelector((state) => state.landing);
  const router = useRouter();

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
              <h2 style={{ color: color }}>{newsSectionTextData?.header}</h2>
              <Link href={newsSectionTextData?.url || ""}>
                <a href={newsSectionTextData?.url || ""}>
                  <Image
                    src={
                      newsSectionTextData?.left_image?.length > 0
                        ? newsSectionTextData?.left_image[0]?.url
                        : "/aaa.jpg"
                    }
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"prod-bod-left-txt"}>
              <p style={{ color: color }}>{newsSectionTextData?.left_title}</p>
              <Link href={newsSectionTextData?.url || ""}>
                <h2 style={{ color: color, cursor: "pointer" }}>
                  {newsSectionTextData?.left_header}
                </h2>
              </Link>
              <span style={{ color: color }}>
                {newsSectionTextData?.left_text}
              </span>
              <button
                className={"filter-bot-btn"}
                onClick={() => router.push(`${newsSectionTextData?.url || ""}`)}
                style={{
                  color: background,
                  backgroundColor: color,
                  width: "31%",
                  display: "flex",
                  margin: "auto",
                }}
              >
                {newsSectionTextData?.small_button}{" "}
              </button>
            </div>
          </div>
          <div className={"product-bottom-middle"}></div>
          <div className={"col-lg-6 product-bottom-right d-flex"}>
            <p style={{ color: color }}>{newsSectionTextData?.right_title}</p>
            <Link href={newsSectionTextData?.url || ""}>
              <h2 style={{ color: color, cursor: "pointer" }}>
                {newsSectionTextData?.right_header}
              </h2>
            </Link>
            <span style={{ color: color }}>
              {newsSectionTextData?.right_text}
            </span>
            <div className={"prod-bot-right-img"}>
              <Link href={newsSectionTextData?.url || ""}>
                <a href={newsSectionTextData?.url || ""}>
                  <Image
                    src={
                      newsSectionTextData?.right_image?.length > 0
                        ? newsSectionTextData?.right_image[0]?.url
                        : "/aaa.jpg"
                    }
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
              className={"filter-bot-btn"}
              onClick={() => router.push(`${newsSectionTextData?.url || ""}`)}
              style={{
                color: background,
                backgroundColor: color,
                width: "31%",
                display: "flex",
                margin: "auto",
              }}
            >
              {newsSectionTextData?.small_button}{" "}
            </button>
          </div>
        </div>
        <button
          className={"filter-bot-btn"}
          onClick={() => router.push(`${newsSectionTextData?.url || ""}`)}
          style={{
            color: background,
            backgroundColor: color,
            width: "20%",
            padding: padd,
          }}
        >
          {newsSectionTextData?.large_button}{" "}
        </button>
      </div>
    </>
  );
};

export default Neuigkeiten;
