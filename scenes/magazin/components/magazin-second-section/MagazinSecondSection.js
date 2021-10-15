import Image from "next/image";
import { useSelector } from "react-redux";
import moment from "moment";
import Link from "next/link";

const MagazinSecondSection = ({ dataText }) => {
  return (
    <div className={"magazin__second__section__container"}>
      <Image
        src={
          dataText?.images?.length > 0
            ? dataText?.images[0]?.url
            : "/magazin/magaz2sect.png"
        }
        width={950}
        height={800}
        layout={"responsive"}
      />
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
        <span className={"magazin__second__section__container__righttxt--txt"}>
          {dataText?.resume}
        </span>
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

export default MagazinSecondSection;
