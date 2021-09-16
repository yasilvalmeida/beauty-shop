import Image from "next/image";
import Link from "next/link";

const InspirationSection = ({ inspiration, background, color, padding }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: background,
        }}
      >
        <div className="inspiration-body">
          <div className="inspiration-left">
            <p style={{ color: color }}>
              {inspiration?.image_header}
            </p>
            <Link href={inspiration?.url || ""}>
              <a href={inspiration?.url || ""}>
                <Image
                  src={
                    inspiration?.image?.length > 0
                      ? inspiration?.image[0]?.url
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
                {inspiration?.title}
              </p>
              <Link href={inspiration?.url || ""}>
                <a href={inspiration?.url || ""}>
                  <h2 style={{ color: color, cursor: "pointer" }}>
                    {inspiration?.header}
                  </h2>
                </a>
              </Link>
              <p
                className={"inspiration-right-bottxt"}
                style={{ color: color }}
              >
                {inspiration?.text}
              </p>
              <Link href={inspiration?.url || ""}>
                <a href={inspiration?.url || ""}>
                  <button style={{ color: background, backgroundColor: color }}>
                    {inspiration?.button}
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
