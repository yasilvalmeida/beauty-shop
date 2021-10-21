import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ArtikelFirstSecBottom = ({ setShowSlider }) => {
  const route = useRouter();
  const { magazinePageTextData, magazineSingleArticleData } = useSelector(
    (state) => state.magazine
  );
  const { asPath } = route;
  return (
    <div className={"artikel__first__bottom__container"}>
      <div className={"artikel__first__bottom__container__images"}>
        {magazineSingleArticleData?.images?.slice(0, 3).map((image, i) => {
          return (
            <div
              key={i}
              className={
                i === 0
                  ? "artikel__first__bottom__container__images--itembig"
                  : "artikel__first__bottom__container__images--itemsmall"
              }
            >
              <img src={image?.url} alt="sirun" />
            </div>
          );
        })}
        <div
          className={
            "artikel__first__bottom__container__images__itemsmallmobile"
          }
        >
          {magazineSingleArticleData?.images?.slice(1, 3).map((image, i) => {
            return (
              <div
                key={i}
              >
                <img src={image?.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <span
        onClick={() => route.push(`${asPath}/gallery`)}
        className={"artikel__first__bottom__container--link"}
      >
        {magazinePageTextData?.gallery}
      </span>
    </div>
  );
};

export default ArtikelFirstSecBottom;
