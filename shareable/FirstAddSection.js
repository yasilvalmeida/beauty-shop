import Image from "next/image";
import Link from "next/link";

const FirstAddSection = ({
  background,
  first,
  second,
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
                    src={first?.images?.url || "/aaa.jpg"}
                    layout="responsive"
                    width={375}
                    height={281}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{first?.header}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3 style={{ color: textcolor, cursor: "pointer" }}>
                    {first?.title}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>
                  {first?.Link_text}
                </p>
              </div>
            </div>
          </div>
          <div className={"sec-sec-el col-lg-6"}>
            <div>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <Image
                    src={second?.images?.url || "/aaa.jpg"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{second?.header}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3 style={{ color: textcolor, cursor: "pointer" }}>
                    {second?.title}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>
                  {first?.Link_text}
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
