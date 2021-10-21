import Image from "next/image";
import { useSelector } from "react-redux";

const ArtikelTwoImages = () => {
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  return (
    <div className={"artikel__two__images__container"}>
      <div className={"artikel__two__images__container__text"}>
        <h2>{magazineSingleArticleData?.center_two_title}</h2>
        <p>{magazineSingleArticleData?.center_two_content_one}</p>
        <p>{magazineSingleArticleData?.center_two_content_two} </p>
      </div>
      <div className={"artikel__two__images__container__images"}>
        <div className={"artikel__two__images__container__images__image"}>
          <div
            className={"artikel__two__images__container__images__image--item1"}
          >
            <Image
              src={
                magazineSingleArticleData?.center_two_image_one?.length > 0
                  ? magazineSingleArticleData?.center_two_image_one[0]?.url
                  : "/magazin/artikeltwoimages/image2.png"
              }
              width={535}
              height={715}
              layout={"responsive"}
            />
          </div>
          <div
            className={"artikel__two__images__container__images__image--item2"}
          >
            <Image
              src={
                magazineSingleArticleData?.center_two_image_two?.length > 0
                  ? magazineSingleArticleData?.center_two_image_two[0]?.url
                  : "/magazin/artikeltwoimages/image1.png"
              }
              width={535}
              height={715}
              layout={"responsive"}
            />
          </div>
        </div>
        <div className="artikel__two__images__container__images__text">
          <p>{magazineSingleArticleData?.center_two_image_text}</p>
          <a href={magazineSingleArticleData?.center_two_image_url}>
            {magazineSingleArticleData?.center_two_image_link_name}
          </a>
        </div>
      </div>
      <div className={"artikel__two__images__container__text2"}>
        <i>{magazineSingleArticleData?.center_two_italic}</i>
        <p>{magazineSingleArticleData?.center_two_content_three}</p>
      </div>
    </div>
  );
};

export default ArtikelTwoImages;
