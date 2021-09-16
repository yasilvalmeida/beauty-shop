import { useSelector } from "react-redux";
import Link from "next/link";

const HerrenHead = () => {
  const { herrenPageTextData } = useSelector((state) => state.herren);

  return (
    <>
      <div className={"herren-head-body"}>
        <div className={"herren-head-left"}>
          <div className={"herren-head-left-body"}>
            <p>{herrenPageTextData?.header_title}</p>
            <Link href={`${herrenPageTextData?.header_url} || ""}`}>
              <h2>{herrenPageTextData?.header_text}</h2>
            </Link>
            <Link href={`${herrenPageTextData?.header_url} || ""}`}>
              <button>{herrenPageTextData?.header_button}</button>
            </Link>
          </div>
        </div>
        <Link href={`${herrenPageTextData?.header_url || "/"}`}>
          <div
            className={"herren-head-right"}
            style={{
              backgroundImage: `url(${
                herrenPageTextData?.header_image?.length > 0
                  ? herrenPageTextData?.header_image[0]?.url
                  : ""
              })`,
            }}
          ></div>
        </Link>
      </div>
    </>
  );
};

export default HerrenHead;
