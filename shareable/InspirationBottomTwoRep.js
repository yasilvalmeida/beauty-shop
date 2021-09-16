import Image from "next/image";
import Link from "next/link";

const InspirationBottomTwoRep = ({
  inspiration, background,
  color,
  padding,
}) => {
  return (
    <>
      <div style={{ backgroundColor: background, paddingBottom: padding }}>
        <div
          className={
            "d-flex flex-wrap inspiration-bottom inspiration-bottom-left"
          }
        >
          <div className={"col-lg-6 inspiration-bottom-image"}>
            <div className={"inspiration-bottom-imagetxt-two"}>
              <Link href={inspiration?.url || ""}>
                <a href={inspiration?.url || ""}>
                  <Image
                    src={
                      inspiration?.image?.length > 0
                        ? inspiration?.image[0]?.url
                        : "/inspirationbot1.png"
                    }
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                  <p className={"insp-bot-lg"}>
                    {inspiration?.image_title}
                  </p>
                  <p className={"insp-bot-lg"}>
                    {inspiration?.image_header}
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className={"col-lg-6 inspiration-bottom-text2"}>
            <div className={"inspiration-bottom-head-txt"}>
              <p style={{ color: color }}>{inspiration?.title}</p>
              <Link href={inspiration?.url || ""}>
                <a href={inspiration?.url || ""}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspiration?.header}
                  </h2>
                </a>
              </Link>
            </div>
            <span style={{ color: color }}>
              {inspiration?.text}
            </span>
            <Link href={inspiration?.url || ""}>
              <button
                className={"inspiration-bottom-btn"}
                style={{ color: background, backgroundColor: color }}
              >
                {inspiration?.button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationBottomTwoRep;
