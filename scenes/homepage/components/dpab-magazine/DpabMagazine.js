import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const DpabMagazine = () => {
  const magazineUrl = "/magazine";
  const { dpabMagazineTextData } = useSelector((state) => state.landing);
  return (
    <>
      <div className={"dpab-magazin-all"}>
        <div className={"dpab-magazin-body"}>
          <h2 className={"dpab-magazin-title"}>
            {dpabMagazineTextData?.header}
          </h2>
          <div className={"dpab-top-section"}>
            <div className={"dpab-top-section-img"}>
              <Image
                src={`${
                  dpabMagazineTextData?.image?.length > 0
                    ? dpabMagazineTextData?.image[0]?.url
                    : "/productbotleft.png"
                }`}
                width={1720}
                height={695}
                layout="responsive"
              />
            </div>
            <div className={"dpab-top-section-txt"}>
              <h2>{dpabMagazineTextData?.image?.subheader}</h2>
              <p>{dpabMagazineTextData?.title}</p>
              <span>{dpabMagazineTextData?.text}</span>
              <Link href={dpabMagazineTextData?.url || "/magazine"}>
                <a href={dpabMagazineTextData?.url || "/magazine"}>
                  {dpabMagazineTextData?.button}
                </a>
              </Link>
            </div>
          </div>
          <div className={"dpab-bottom-section d-flex flex-wrap"}>
            <div className={"col-lg-6 dpab-bottom-section-left d-flex"}>
              <div className={"dpab-bottom-section-left-img-bod"}>
                <div className={"dpab-bottom-section-left-img"}>
                  <Image
                    src={`${
                      dpabMagazineTextData?.left_image?.length > 0
                        ? dpabMagazineTextData?.left_image[0]?.url
                        : "/productbotleft.png"
                    }`}
                    width={837}
                    height={635}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className={"dpab-bottom-section-left-txt"}>
                <h2>{dpabMagazineTextData?.left_header}</h2>
                <p>{dpabMagazineTextData?.left_title}</p>
                <span>{dpabMagazineTextData?.left_text}</span>
                <Link href={dpabMagazineTextData?.left_url || "/magazine"}>
                  <a href={dpabMagazineTextData?.left_url || "/magazine"}>
                    {dpabMagazineTextData?.left_button}
                  </a>
                </Link>
              </div>
            </div>
            <div className={"dpab-bottom-section-right"}>
              <h2>{dpabMagazineTextData?.right_header}</h2>
              <p>{dpabMagazineTextData?.right_title}</p>
              <span>{dpabMagazineTextData?.right_text}</span>
              <div className={"dpab-bottom-section-right-img"}>
                <Image
                  src={`${
                    dpabMagazineTextData?.image.length > 0
                      ? dpabMagazineTextData?.image[0]?.url
                      : "/productbotleft.png"
                  }`}
                  width={760}
                  height={627}
                  layout="responsive"
                />
              </div>
              <Link href={dpabMagazineTextData?.right_url || "/magazine"}>
                <a href={dpabMagazineTextData?.right_url || "/magazine"}>
                  {dpabMagazineTextData?.right_button}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DpabMagazine;
