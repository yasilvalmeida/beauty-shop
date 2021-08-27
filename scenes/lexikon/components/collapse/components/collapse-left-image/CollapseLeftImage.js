import Image from "next/image";
const CollapseLeftImage = ({ data }) => {
  return (
    <div className={"lexikon__collapse__left__container"}>
      <div className={"lexikon__collapse__left__container__image"}>
        <img
          src={
            data?.image?.length > 0
              ? data?.image[0]?.url
              : "/lexikon/lexikon.png"
          }
          alt="lexikon"
        />
        <div className={"lexikon__collapse__left__container__image--mobile"}>
          <Image
            src={
              data?.image?.length > 0
                ? data?.image[0]?.url
                : "/lexikon/lexikon.png"
            }
            width={1000}
            height={650}
          />
        </div>
      </div>
      <div className={"lexikon__collapse__left__container__text"}>
        <h2>{data?.header}</h2>
        <p className={"el1"}>{data?.text}</p>
      </div>
    </div>
  );
};

export default CollapseLeftImage;
