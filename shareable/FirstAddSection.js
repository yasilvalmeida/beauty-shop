import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const FirstAddSection = ({ background, textcolor, padding }) => {
  const { sectionTextData } = useSelector((state) => state?.landing);
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
                    src={sectionTextData?.left_image?.length > 0 ? sectionTextData?.left_image[0]?.url : "/aaa.jpg"}
                    layout="responsive"
                    width={375}
                    height={281}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{sectionTextData?.left_text}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3 style={{ color: textcolor, cursor: "pointer" }}>
                    {sectionTextData?.left_header}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>
                  {sectionTextData?.button}
                </p>
              </div>
            </div>
          </div>
          <div className={"sec-sec-el col-lg-6"}>
            <div>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <Image
                    src={sectionTextData?.right_image?.length > 0 ? sectionTextData?.right_image[0]?.url : "/aaa.jpg"}
                    layout="responsive"
                    width={800}
                    height={600}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-text"}>
              <p style={{ color: textcolor }}>{sectionTextData?.right_text}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h3 style={{ color: textcolor, cursor: "pointer" }}>
                    {sectionTextData?.right_header}
                  </h3>
                </a>
              </Link>
            </div>
            <div className={"sec-sec-el-link"}>
              <div className="collection-shop-button">
                <p onClick={() => router.push(`${shopUrl}`)}>
                  {sectionTextData?.button}
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
