import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const FirstIntro = () => {
  const { firstIntroData, firstIntroLoading } = useSelector(
    (state) => state.landing
  );
  return (
    <>
      <div className={"first-intro "}>
        <div className={"first-intro-body"}>
          <div className={"first-intro-bod-left"}>
            <div>
              <p className={"intro-small-txt"}>{firstIntroData?.header}</p>
              <Link href={firstIntroData?.url || ""}>
                <a href={firstIntroData?.url || ""}>
                  <h2 className={"intro-big-txt"} style={{ cursor: "pointer" }}>
                    {firstIntroData?.title}
                  </h2>
                </a>
              </Link>
            </div>
            <Link href={firstIntroData?.url || ""}>
              <a href={firstIntroData?.url || ""}>
                <button>{firstIntroData?.button}</button>
              </a>
            </Link>
          </div>
          <div className={"first-intro-bod-right"}>
            <Link href={firstIntroData?.url || ""}>
              <a href={firstIntroData?.url || ""}>
                <Image
                  src={
                    firstIntroData?.image?.length > 0
                      ? firstIntroData?.image[0]?.url
                      : "/aaa.jpg"
                  }
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstIntro;
