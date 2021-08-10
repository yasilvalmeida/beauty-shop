import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const FirstIntro = () => {
  const HPFS = useSelector((state) => state.navbar.homePageSctOne);
  const homepageIntro = HPFS.find((p) => p.position === "HomePage");
  const shopUrl = "/shop";
  return (
    <>
      <div className={"first-intro "}>
        <div className={"first-intro-body"}>
          <div className={"first-intro-bod-left"}>
            <div>
              <p className={"intro-small-txt"}>{homepageIntro?.header}</p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h2 className={"intro-big-txt"} style={{ cursor: "pointer" }}>
                    {homepageIntro?.title}
                  </h2>
                </a>
              </Link>
            </div>
            <Link href={shopUrl}>
              <a href={shopUrl}>
                <button>{homepageIntro?.button_text}</button>
              </a>
            </Link>
          </div>
          <div className={"first-intro-bod-right"}>
            <Link href={shopUrl}>
              <a href={shopUrl}>
                <Image
                  src={homepageIntro?.images?.url || "/aaa.jpg"}
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
