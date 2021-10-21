import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";

const MagazinAddSection = ({ addData1, addData2, addData3 }) => {
  const { magazineCategoriesData } = useSelector(
    (state) => state.magazine
  );
  return (
    <div className={"magazin__add__section__container"}>
      <div className={"magazin__add__section__container__item item1"}>
        <Link href={`blog/${addData3?.id}`}>
          <a
            href={`blog/${addData3?.id}`}
            className={"component__header__bottom__body__white__text--link"}
          >
            <div
              className={"magazin__add__section__container__item--img"}
              style={{
                backgroundImage: `url(${
                  addData1?.images?.length > 0 ? addData1?.images[0]?.url : ""
                })`,
              }}
            ></div>
          </a>
        </Link>
        <div className={"magazin__add__section__container__item--text"}>
          <p>
            {addData1?.magazine_category?.name ||
              magazineCategoriesData?.find(
                (category) => category?.id === addData1?.magazine_category
              )?.name}
          </p>
          <h3>{addData1?.title}</h3>
          <span>{moment(addData1?.date).format("DD.MM.YYYY")}</span>
        </div>
      </div>
      <div className={"magazin__add__section__container__item item2"}>
        <Link href={`blog/${addData3?.id}`}>
          <a
            href={`blog/${addData3?.id}`}
            className={"component__header__bottom__body__white__text--link"}
          >
            <div
              className={"magazin__add__section__container__item--img"}
              style={{
                backgroundImage: `url(${
                  addData2?.images?.length > 0 ? addData2?.images[0]?.url : ""
                })`,
              }}
            ></div>
          </a>
        </Link>
        <div className={"magazin__add__section__container__item--text"}>
          <p>
            {addData2?.magazine_category?.name ||
              magazineCategoriesData?.find(
                (category) => category?.id === addData2?.magazine_category
              )?.name}
          </p>
          <h3>{addData2?.title}</h3>
          <span>{moment(addData2?.date).format("DD.MM.YYYY")}</span>
        </div>
      </div>
      <div className={"magazin__add__section__container__item item3"}>
        <Link href={`blog/${addData3?.id}`}>
          <a
            href={`blog/${addData3?.id}`}
            className={"component__header__bottom__body__white__text--link"}
          >
            <div
              className={"magazin__add__section__container__item--img"}
              style={{
                backgroundImage: `url(${
                  addData3?.images?.length > 0 ? addData3?.images[0]?.url : ""
                })`,
              }}
            ></div>
          </a>
        </Link>
        <div className={"magazin__add__section__container__item--text"}>
          <p>
            {addData3?.magazine_category?.name ||
              magazineCategoriesData?.find(
                (category) => category?.id === addData3?.magazine_category
              )?.name}
          </p>
          <h3>{addData3?.title}</h3>
          <span>{moment(addData3?.date).format("DD.MM.YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default MagazinAddSection;
