import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setMagazineCategoryIndex } from "../../../../../../services/actions/magazine";

const MediatekInfoMagazin = () => {
  const dispatch = useDispatch();
  const { magazineCategoriesData } = useSelector((state) => state.magazine);
  const [categoryId, setcategoryId] = useState(0);
  useEffect(() => {
    dispatch(setMagazineCategoryIndex(categoryId));
  }, [categoryId]);
  return (
    <div className={"magazin__container__header__buttons"}>
      {magazineCategoriesData?.length > 0 &&
        magazineCategoriesData?.map((category, i) => {
          return (
            <button key={i} onClick={() => setcategoryId(category?.id)}>
              {category?.name}
            </button>
          );
        })}
    </div>
  );
};

export default MediatekInfoMagazin;
