import Link from "next/link";
import Image from "next/image";

const FirstShareableIntro = ({
  smalltxt,
  bigtext1,
  bigtext2,
  btntext,
  bg,
  color,
  padding,
  homepageIntro,
}) => {
  const shopUrl = "/shop";
  return (
    <div style={{ backgroundColor: bg }}>
      <div className={`mobile__firstintro__body ${padding}`}>
        <div className={"text-body"}>
          <p className={"small-text"} style={{ color: color }}>
            {homepageIntro?.header}
          </p>
          <Link href={`${shopUrl}`}>
            <a href={shopUrl}>
              <h2
                className={"big-text"}
                style={{ color: color, cursor: "pointer" }}
              >
                {homepageIntro?.title}
              </h2>
            </a>
          </Link>
        </div>
        <div className={"image-body"}>
          <Link href={`${shopUrl}`}>
            <a href={shopUrl}>
              <Image
                src={homepageIntro?.images?.url || "/aaa.jpg"}
                layout="responsive"
                width={800}
                height={600}
                style={{ cursor: "pointer" }}
              />
            </a>
          </Link>
        </div>

        <div className={"button-body"}>
          <Link href={`${shopUrl}`}>
            <a href={shopUrl}>
              <button>{homepageIntro?.button_text}</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstShareableIntro;
