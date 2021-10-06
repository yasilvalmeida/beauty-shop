import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const RecommendationHeader = () => {
  const { recommendationTextData } = useSelector((state) => state.recommendation);
  const background  = "white";
  const color = "black";
  return (
    <>
      <div style={{ backgroundColor: background }}>
        <div className={"d-flex flex-wrap inspiration-bottom"}>
          <div className={"col-lg-6 inspiration-bottom-text"}>
            <div className={"inspiration-bottom-head-txt"}>
              <p style={{ color: color }}>{recommendationTextData?.header_title}</p>
              <h2 style={{ color: color, cursor: "pointer" }}>
                {recommendationTextData?.header_subtitle}
              </h2>
            </div>
            <span style={{ color: color }}>{recommendationTextData?.header_text}</span>
          </div>
          <div className={"col-lg-6 inspiration-bottom-image"}>
            <div className={"inspiration-bottom-imagetxt"}>
              <Image
                src={
                  recommendationTextData?.header_image?.length > 0
                    ? recommendationTextData?.header_image[0]?.url
                    : "/inspirationbot1.png"
                }
                layout="responsive"
                width={800}
                height={600}
                style={{ cursor: "pointer" }}
              />
              <p className={"insp-bot-lg"}>
                {recommendationTextData?.header_image_title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationHeader;
