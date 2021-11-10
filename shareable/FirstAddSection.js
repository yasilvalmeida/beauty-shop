import Image from "next/image";
import Link from "next/link";

const FirstAddSection = ({
  background,
  textcolor,
  padding,
  sectionTextData,
}) => {
  const {
    left_image,
    left_text,
    left_header,
    right_image,
    right_text,
    right_header,
    button,
  } = !sectionTextData
    ? {
        left_image: "",
        left_text: "",
        left_header: "",
        right_image: "",
        right_text: "",
        right_header: "",
        button: "",
      }
    : sectionTextData;
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
                    src={
                      left_image && left_image?.length > 0
                        ? left_image[0]?.url
                        : "/aaa.jpg"
                    }
                    layout="responsive"
                    width={375}
                    height={281}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{left_text}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3
                    style={{
                      color: textcolor,
                      cursor: "pointer",
                    }}
                  >
                    {left_header}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>{button}</p>
              </div>
            </div>
          </div>
          <div className={"sec-sec-el col-lg-6"}>
            <div>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <Image
                    src={
                      right_image?.length > 0 ? right_image[0]?.url : "/aaa.jpg"
                    }
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p
                style={{
                  color: textcolor,
                }}
              >
                {right_text}
              </p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3
                    style={{
                      color: textcolor,
                      cursor: "pointer",
                    }}
                  >
                    {right_header}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>{button}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstAddSection;
