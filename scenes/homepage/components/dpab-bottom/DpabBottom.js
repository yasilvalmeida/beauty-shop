import { useSelector } from "react-redux";

const DpabBottom = () => {
  const { dpabBottomTextData } = useSelector((state) => state.landing);
  const phone_and_number = dpabBottomTextData?.phone?.split(":");
  return (
    <>
      <div className={"dpab-bottom-body d-flex"} style={{ marginTop: "12rem" }}>
        <div className={"dpab-bot-txt"}>
          <h2>{dpabBottomTextData?.header}</h2>
          <p className={"dpab-bot-head-bot"}>{dpabBottomTextData?.address}</p>
          <p className={"dpab-bot-head-other"}>
            {dpabBottomTextData?.open_time}
          </p>
          <p className={"dpab-bot-head-other"}>
            {phone_and_number?.length > 0 ? phone_and_number[0] : "TELEFON"}:{" "}
            <a
              href={`tel:${
                phone_and_number?.length > 1 ? phone_and_number[1] : ""
              }`}
            >
              {phone_and_number?.length > 1 ? phone_and_number[1] : ""}
            </a>
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${
              dpabBottomTextData?.image?.length > 0
                ? dpabBottomTextData?.image[0]?.url
                : "/dpabbottom.png"
            })`,
            backgroundSize: "cover",
          }}
          className={"dpab-bot-img"}
        ></div>
      </div>
    </>
  );
};

export default DpabBottom;
