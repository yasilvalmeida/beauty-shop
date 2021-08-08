import Image from 'next/image';
import Link from 'next/link';

const InspirationSection = ({ background, color, inspiration, padding }) => {
  const shopUrl = "/shop";
  return (
    <>
      <div style={{ backgroundColor: background, paddingTop: padding }}>
        <div className="inspiration-body d-flex flex-wrap">
          <div className="col-lg-9 col-xl-9 inspiration-left">
            <p style={{ color: color }}>{inspiration?.image_title}</p>
            <Link href={shopUrl}>
              <a href={shopUrl}>
                <Image
                  src={inspiration?.images?.url || "/aaa.jpg"}
                  layout="responsive"
                  width={800}
                  height={600}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </Link>
          </div>
          <div className={"col-lg-3 col-xl-3 inspiration-right d-flex"}>
            <div className={"inspiration-right-head"}>
              <p
                className={"inspiration-right-headtxt"}
                style={{ color: color }}
              >
                {inspiration?.header}
              </p>
              <Link href={shopUrl}>
                <a href={shopUrl}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspiration?.title}
                  </h2>
                </a>
              </Link>
            </div>
            <p className={"inspiration-right-bottxt"} style={{ color: color }}>
              {inspiration?.text}
            </p>
            <Link href={shopUrl}>
              <a href={shopUrl}>
                <button style={{ color: background, backgroundColor: color }}>
                  {inspiration?.button_text}
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationSection;
