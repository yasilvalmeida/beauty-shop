import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const InspirationSection = ({ background, color, padding }) => {
  const { inspirationOneTextData } = useSelector((state) => state.landing);
  return (
    <>
      <div style={{ backgroundColor: background, paddingTop: padding }}>
        <div className="inspiration-body">
          <div className="inspiration-left">
            <p style={{ color: color }}>
              {inspirationOneTextData?.image_header}
            </p>
            <Link href={inspirationOneTextData?.url || ""}>
              <a href={inspirationOneTextData?.url || ""}>
                <Image
                  src={
                    inspirationOneTextData?.image?.length > 0
                      ? inspirationOneTextData?.image[0]?.url
                      : "/aaa.jpg"
                  }
                  layout="responsive"
                  width={800}
                  height={560}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </Link>
          </div>
          <div className={"inspiration-right"}>
            <div className={"inspiration-right-head"}>
              <p
                className={"inspiration-right-headtxt"}
                style={{ color: color }}
              >
                {inspirationOneTextData?.title}
              </p>
              <Link href={inspirationOneTextData?.url || ""}>
                <a href={inspirationOneTextData?.url || ""}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspirationOneTextData?.header}
                  </h2>
                </a>
              </Link>
              <p
                className={"inspiration-right-bottxt"}
                style={{ color: color }}
              >
                {inspirationOneTextData?.text}
              </p>
              <Link href={inspirationOneTextData?.url || ""}>
                <a href={inspirationOneTextData?.url || ""}>
                  <button style={{ color: background, backgroundColor: color }}>
                    {inspirationOneTextData?.button}
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationSection;
