import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const InspirationBottomOneRep = ({ background, color }) => {
  const { inspirationTwoTextData } = useSelector((state) => state.landing);
  return (
    <>
      <div style={{ backgroundColor: background }}>
        <div className={"d-flex flex-wrap inspiration-bottom"}>
          <div className={"col-lg-6 inspiration-bottom-text"}>
            <div className={"inspiration-bottom-head-txt"}>
              <p style={{ color: color }}>{inspirationTwoTextData?.title}</p>
              <Link href={inspirationTwoTextData?.url || ""}>
                <a href={inspirationTwoTextData?.url || ""}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspirationTwoTextData?.header}
                  </h2>
                </a>
              </Link>
            </div>
            <span style={{ color: color }}>{inspirationTwoTextData?.text}</span>
            <Link href={inspirationTwoTextData?.url || ""}>
              <button
                className={"inspiration-bottom-btn"}
                style={{ color: background, backgroundColor: color }}
              >
                {inspirationTwoTextData?.button}
              </button>
            </Link>
          </div>
          <div className={"col-lg-6 inspiration-bottom-image"}>
            <div className={"inspiration-bottom-imagetxt"}>
              <Link href={inspirationTwoTextData?.url || ""}>
                <a href={inspirationTwoTextData?.url || ""}>
                  <Image
                    src={
                      inspirationTwoTextData?.image?.length > 0
                        ? inspirationTwoTextData?.image[0]?.url
                        : "/inspirationbot1.png"
                    }
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                  <p className={"insp-bot-sm"}>
                    {inspirationTwoTextData?.image_title}
                  </p>
                  <p className={"insp-bot-lg"}>
                    {inspirationTwoTextData?.image_header}
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationBottomOneRep;
