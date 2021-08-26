import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const FirstShareableIntro = ({
  smalltxt,
  bigtext1,
  bigtext2,
  btntext,
  bg,
  color,
  padding,
}) => {
  const { firstIntroData, firstIntroLoading } = useSelector(
    (state) => state.landing
  );
  return (
    <div style={{ backgroundColor: bg }}>
      <div className={`mobile__firstintro__body ${padding}`}>
        <div className={"text-body"}>
          <p className={"small-text"} style={{ color: color }}>
            {firstIntroData?.header}
          </p>
          <Link href={firstIntroData?.url || ""}>
            <a href={firstIntroData?.url || ""}>
              <h2
                className={"big-text"}
                style={{ color: color, cursor: "pointer" }}
              >
                {firstIntroData?.title}
              </h2>
            </a>
          </Link>
        </div>
        <div className={"image-body"}>
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
                style={{ cursor: "pointer" }}
              />
            </a>
          </Link>
        </div>

        <div className={"button-body"}>
          <Link href={firstIntroData?.url || ""}>
            <a href={firstIntroData?.url || ""}>
              <button>{firstIntroData?.button}</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstShareableIntro;
