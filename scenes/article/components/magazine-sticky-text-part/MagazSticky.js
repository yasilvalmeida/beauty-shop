import Image from "next/image";
import { useSelector } from "react-redux";

const MagazSticky = () => {
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  return (
    <div className={"magaz__artikel__sticky__container"}>
      <div className={"magaz__artikel__sticky__container__image"}>
        <Image
          src={
            magazineSingleArticleData?.left_image?.length > 0
              ? magazineSingleArticleData?.left_image[0]?.url
              : "/magazin/magaz.jpg"
          }
          width={500}
          height={953}
        />
        <p>{magazineSingleArticleData?.left_image_text}</p>
        <a href={magazineSingleArticleData?.left_image_url}>
          {magazineSingleArticleData?.left_image_link_name}
        </a>
      </div>
      <div className={"magaz__artikel__sticky__container__image2"}>
        <Image
          src={
            magazineSingleArticleData?.left_image?.length > 0
              ? magazineSingleArticleData?.left_image[0]?.url
              : "/magazin/magaz.jpg"
          }
          width={994}
          height={743}
        />
        <p>{magazineSingleArticleData?.left_image_text}</p>
        <a href={magazineSingleArticleData?.left_image_url}>
          {magazineSingleArticleData?.left_image_link_name}
        </a>
      </div>
      <div className={"magaz__artikel__sticky__container__text"}>
        <h3>{magazineSingleArticleData?.title}</h3>
        <p>{magazineSingleArticleData?.right_content_one}</p>
        <i>{magazineSingleArticleData?.right_content_italic_one}</i>
        <p>{magazineSingleArticleData?.right_content_two}</p>
      </div>
    </div>
  );
};

export default MagazSticky;
