import Link from 'next/link';

const InspirationBottomTwoRep = ({ background, color, padding, inspiration }) => {
    const shopUrl = "/shop";
    return (
      <>
        <div style={{ backgroundColor: background, paddingBottom: padding }}>
          <div
            className={
              "d-flex flex-wrap inspiration-bottom  inspiration-bottom-left"
            }
          >
            <div
              className={"col-lg-6 inspiration-bottom-image"}
              style={{
                backgroundImage: `url(${
                  inspiration?.images?.url || "/inspirationbot2.png"
                })`,
              }}
            >
              <div className={"inspiration-bottom-imagetxt-two"}>
                <p className={"insp-bot-lg"}>{inspiration?.image_header}</p>
                <p className={"insp-bot-lg"}>{inspiration?.image_title}</p>
              </div>
            </div>
            <div className={"col-lg-6 inspiration-bottom-text2"}>
              <div className={"inspiration-bottom-head-txt"}>
                <p style={{ color: color }}>{inspiration?.header}</p>
                <h2 style={{ color: color }}>
                  {inspiration?.title}
                </h2>
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

export default InspirationBottomTwoRep