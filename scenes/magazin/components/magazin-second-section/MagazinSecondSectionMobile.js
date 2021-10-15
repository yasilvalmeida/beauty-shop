import { useSelector } from "react-redux";
import moment from "moment";
import Link from "next/link";

const MagazinSecondSectionMobile = ({ dataText }) => {
  return (
    <div
      className={"magazin__second__section__mobile__container"}
      style={{
        backgroundImage: `url(${
          dataText?.images?.length > 0
            ? dataText?.images[0]?.url
            : "/magazin/magaz2sect.png"
        })`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={"magazin__second__section__container__righttxt"}>
        <p className={"magazin__second__section__container__righttxt--date"}>
          {moment(dataText?.date).format("DD.MM.YYYY")}
        </p>
        <p
          className={
            "magazin__second__section__container__righttxt--coverstory"
          }
        >
          {dataText?.magazine_category?.name}
        </p>
        <h3 className={"magazin__second__section__container__righttxt--title"}>
          {dataText?.title}
        </h3>
        <Link href={`article/${dataText?.id}`}>
          <a
            href={`article/${dataText?.id}`}
            className={"magazin__second__section__container__righttxt--link"}
          >
            {dataText?.link}
          </a>
        </Link>{" "}
      </div>
    </div>
  );
};

export default MagazinSecondSectionMobile;
