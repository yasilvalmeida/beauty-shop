import Image from "next/image";
import Link from "next/link";

const FirstAddSection = ({
  background,
  firstData,
  secondData,
  textcolor,
  padding,
}) => {
  const shopUrl = "/shop";
  return (
    <>
      <div
        className={"second-section-home "}
        style={{
          backgroundColor: background,
          paddingTop: padding,
          paddingBottom: padding,
        }}
      >
        <div className={"sec-sect-all d-flex flex-wrap"}>
          <div className={"sec-sec-el col-lg-6"}>
            <div>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <Image
                    src={firstData?.images?.url || "/aaa.jpg"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{firstData?.header}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3 style={{ color: textcolor, cursor: "pointer" }}>
                    {firstData?.title}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>
                  {firstData?.Link_text}
                </p>
              </div>
            </div>
          </div>
          <div className={"sec-sec-el col-lg-6"}>
            <div>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <Image
                    src={secondData?.images?.url || "/aaa.jpg"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{secondData?.header}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3 style={{ color: textcolor, cursor: "pointer" }}>
                    {secondData?.title}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>
                  {firstData?.Link_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstAddSection;
