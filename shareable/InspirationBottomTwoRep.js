import Image from "next/image";
import Link from "next/link";

const InspirationBottomTwoRep = ({
  background,
  color,
  padding,
  inspiration,
}) => {
  const shopUrl = "/shop";
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
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <Image
                    src={inspiration?.images?.url || "/inspirationbot1.png"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                  <p className={"insp-bot-lg"}>{inspiration?.image_header}</p>
                  <p className={"insp-bot-lg"}>{inspiration?.image_title}</p>
                </a>
              </Link>
            </div>
          </div>
          <div className={"col-lg-6 inspiration-bottom-text2"}>
            <div className={"inspiration-bottom-head-txt"}>
              <p style={{ color: color }}>{inspiration?.header}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspiration?.title}
                  </h2>
                </a>
              </Link>
            </div>
            <span style={{ color: color }}>{inspiration?.text}</span>
            <Link href={shopUrl}>
              <button
                className={"inspiration-bottom-btn"}
                style={{ color: background, backgroundColor: color }}
              >
                {inspiration?.button_text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationBottomTwoRep;
