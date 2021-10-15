import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
const ComponentHeaderBottom = () => {
  const { magazineCategoriesData, magazineArticlesData } = useSelector(
    (state) => state.magazine
  );
  const [selectedNew, setSelectedNew] = useState(
    magazineArticlesData?.length > 0 ? magazineArticlesData[0] : null
  );
  useEffect(() => {
    if (magazineArticlesData?.length > 0) {
      setSelectedNew(magazineArticlesData[0]);
    }
  }, [magazineArticlesData]);
  return (
    <div className={"component__header__bottom__body"}>
      <div className={"component__header__bottom__body__white"}>
        <div className={"component__header__bottom__body__white__image"}>
          <Image
            src={`${
              selectedNew?.images?.length > 0
                ? selectedNew?.images[0].url
                : "/magazin/magazin2.png"
            }`}
            layout={"responsive"}
            width={1300}
            height={630}
          />
        </div>
        <div className={"component__header__bottom__body__white__text"}>
          <span
            className={"component__header__bottom__body__white__text--date"}
          >
            {moment(selectedNew?.date).format("DD.MM.YYYY")}
          </span>
          <p
            className={
              "component__header__bottom__body__white__text--coverstory"
            }
          >
            {selectedNew?.magazine_category?.name ||
              magazineCategoriesData?.find(
                (category) => category?.id === selectedNew?.magazine_category
              )?.name}
          </p>
          <h2 className={"component__header__bottom__body__white__text--title"}>
            {selectedNew?.title}
          </h2>
          <span className={"component__header__bottom__body__white__text--txt"}>
            {selectedNew?.resume}
          </span>
          <Link href={`article/${selectedNew?.id}`}>
            <a
              href={`article/${selectedNew?.id}`}
              className={"component__header__bottom__body__white__text--link"}
            >
              {selectedNew?.link}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeaderBottom;
