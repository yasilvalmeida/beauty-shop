import Image from 'next/image';

const FirstAddSection = ({ background, firstData, secondData, textcolor, padding }) => {
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
                <Image
                  src={firstData?.images?.url || "/aaa.jpg"}
                  layout="responsive"
                  width={840}
                  height={630}
                />
              </div>
              <div className={"sec-sec-el-text"}>
                <p style={{ color: textcolor }}>{firstData?.header}</p>
                <h3 style={{ color: textcolor }}>{firstData?.title}</h3>
              </div>
              <div className={"sec-sec-el-link"}>
                <div className="collection-shop-button">
                  <p onClick={() => router.push(`${shopUrl}`)}>
                    {firstData?.Link_text}
                  </p>
                </div>
              </div>
            </div>
            <div className={"sec-sec-el col-lg-6"}>
              <div>
                <Image
                  src={secondData?.images?.url || "/aaa.jpg"}
                  layout="responsive"
                  width={840}
                  height={630}
                />
              </div>
              <div className={"sec-sec-el-text"}>
                <p style={{ color: textcolor }}>{secondData?.header}</p>
                <h3 style={{ color: textcolor }}>{secondData?.title}</h3>
              </div>
              <div className={"sec-sec-el-link"}>
                <div className="collection-shop-button">
                  <p onClick={() => router.push(`${shopUrl}`)}>
                    {firstData?.Link_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default FirstAddSection