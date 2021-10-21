import BeautyEssentialItem from "../../../../shareable/beauty-magaz-essentials/BeautyEssentialItem";
import { useDispatch, useSelector } from "react-redux";

const BeautyEssentials = () => {
  const { magazinePageTextData, magazineBlogsData } = useSelector(
    (state) => state.magazine
  );
  const magazineBlogDataReduced = magazineBlogsData?.length > 6 ? magazineBlogsData?.slice(6): [];
  return (
    <div className="beauty__essential__container">
      <div className={"beauty__essential__container__title"}>
        <h3>{magazinePageTextData?.beauty_title}</h3>
      </div>
      <div className="beauty__essential__container__items">
        {magazineBlogDataReduced?.length > 0 ? (
          magazineBlogDataReduced?.map((e, i) => {
            return (
              <div
                key={i}
                className={"beauty__essential__container__items__elem"}
              >
                <BeautyEssentialItem elem={e} />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default BeautyEssentials;
