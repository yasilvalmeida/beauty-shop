import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const InspirationBottomTwoRep = ({ background, color, padding }) => {
  const { inspirationThreeTextData } = useSelector((state) => state.landing);
  return (
    <>
      <div style={{ backgroundColor: background, paddingBottom: padding }}>
        <div
          className={
            "d-flex flex-wrap inspiration-bottom  inspiration-bottom-left"
          }
        >
          <div className={"col-lg-6 inspiration-bottom-image"}>
            <div className={"inspiration-bottom-imagetxt-two"}>
              <Link href={inspirationThreeTextData?.url || ""}>
                <a href={inspirationThreeTextData?.url || ""}>
                  <Image
                    src={
                      inspirationThreeTextData?.image?.length > 0
                        ? inspirationThreeTextData?.image[0]?.url
                        : "/inspirationbot1.png"
                    }
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                  <p className={"insp-bot-lg"}>
                    {inspirationThreeTextData?.image_title}
                  </p>
                  <p className={"insp-bot-lg"}>
                    {inspirationThreeTextData?.image_header}
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className={"col-lg-6 inspiration-bottom-text2"}>
            <div className={"inspiration-bottom-head-txt"}>
              <p style={{ color: color }}>{inspirationThreeTextData?.title}</p>
              <Link href={inspirationThreeTextData?.url || ""}>
                <a href={inspirationThreeTextData?.url || ""}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspirationThreeTextData?.header}
                  </h2>
                </a>
              </Link>
            </div>
            <span style={{ color: color }}>
              {inspirationThreeTextData?.text}
            </span>
            <Link href={inspirationThreeTextData?.url || ""}>
              <button
                className={"inspiration-bottom-btn"}
                style={{ color: background, backgroundColor: color }}
              >
                {inspirationThreeTextData?.button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationBottomTwoRep;
