import { useDispatch, useSelector } from "react-redux";
import { setMagazineCategoryIndex } from "../../../../../services/actions/magazine";
import { useRouter } from "next/router";

const MediatekInfoMagazinArtikel = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { magazineCategoriesData } = useSelector((state) => state.magazine);
  return (
    <div className={"magazin__container__header__buttons"}>
      {magazineCategoriesData?.length > 0 &&
        magazineCategoriesData?.map((category, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                dispatch(setMagazineCategoryIndex(category?.id));
                route.push("/magazine");
              }}
            >
              {category?.name}
            </button>
          );
        })}
    </div>
  );
};

export default MediatekInfoMagazinArtikel;
