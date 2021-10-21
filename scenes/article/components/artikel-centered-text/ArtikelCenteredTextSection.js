import Image from "next/image";
import { useSelector } from "react-redux";

const ArtikelCenteredSection = () => {
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  return (
    <div className={"artikel__centered__container"}>
      <h2>{magazineSingleArticleData?.center_title}</h2>
      <p>{magazineSingleArticleData?.center_content_one}</p>
      <p>{magazineSingleArticleData?.center_content_two} </p>
      <div className={"artikel__centered__container__image"}>
        <Image
          src={
            magazineSingleArticleData?.center_image?.length > 0
              ? magazineSingleArticleData?.center_image[0]?.url
              : "/magazin/centered/centered.png"
          }
          width={1104}
          height={835}
        />
      </div>
      <span>{magazineSingleArticleData?.center_image_text}</span>
      <a href={magazineSingleArticleData?.center_image_url}>
        {magazineSingleArticleData?.center_image_link_name}
      </a>
    </div>
  );
};

export default ArtikelCenteredSection;
