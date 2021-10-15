import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";

const BeautyEssentialItem = ({ elem }) => {
  const { magazineCategoriesData } = useSelector((state) => state.magazine);
  const category =
    magazineCategoriesData?.length > 0
      ? magazineCategoriesData?.find(
          (category) => category?.id === elem?.magazine_category
        )
      : [];
  console.log("aux", category);
  return (
    <div className={"beauty__essential__container__items__elem__body"}>
      <Link href={`blog/${elem?.id}`}>
        <a
          href={`blog/${elem?.id}`}
          className={"component__header__bottom__body__white__text--link"}
        >
          <div
            className={"beauty__essential__container__items__elem__body--img"}
          >
            <img
              src={elem?.images?.length > 0 ? elem?.images[0]?.url : ""}
              alt="elem"
            />
          </div>
        </a>
      </Link>
      <div className={"beauty__essential__container__items__elem__body--text"}>
        <p className={"small"}>{category?.name}</p>
        <h2 className={"title"}>{elem?.title}</h2>
        <p className={"text"}>{elem?.resume}</p>
        <p className={"date"}>{moment(elem?.date).format("DD.MM.YYYY")}</p>
      </div>
    </div>
  );
};

export default BeautyEssentialItem;
