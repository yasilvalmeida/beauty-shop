import Image from "next/image";
import FirstTextSection from "./components/firstsection/FirstSection";
import Products from "../products/Products";
import FirstSectionShortText from "./components/firstsection/FirstSectionShortText";
import { useSelector } from "react-redux";

const MagazSticky = () => {
  const { magazineSingleBlogData } = useSelector((state) => state.magazine);
  return (
    <div className={"magaz__artikel__sticky__container__second"}>
      <div className={"magaz__artikel__sticky__container__second__image"}>
        <div className={"magaz__artikel__two__sticky"}>
          <Image
            src={
              magazineSingleBlogData?.images?.length > 0
                ? magazineSingleBlogData?.images[0]?.url
                : "/magazin/magaz.jpg"
            }
            width={500}
            height={627}
          />
          <p>{magazineSingleBlogData?.image_text}</p>
        </div>
      </div>
      <div className={"magaz__artikel__sticky__container__second__image2"}>
        <Image
          src={
            magazineSingleBlogData?.images?.length > 0
              ? magazineSingleBlogData?.images[0]?.url
              : "/magazin/magaz.jpg"
          }
          width={994}
          height={743}
        />
        <p>{magazineSingleBlogData?.image_text}</p>
      </div>
      <div className={"magaz__artikel__sticky__container__second__text"}>
        <FirstTextSection
          title={magazineSingleBlogData?.title}
          content_one={magazineSingleBlogData?.content_one}
          content_italic={magazineSingleBlogData?.content_italic}
          content_two={magazineSingleBlogData?.content_two}
        />
        <Products
          products={magazineSingleBlogData?.magazine_blog_products?.slice(0, 3)}
        />
        <FirstTextSection
          title={magazineSingleBlogData?.title}
          content_one={magazineSingleBlogData?.content_one}
          content_italic={magazineSingleBlogData?.content_italic}
          content_two={magazineSingleBlogData?.content_two}
        />
        <Products
          products={magazineSingleBlogData?.magazine_blog_products?.slice(3)}
        />
        <FirstSectionShortText
          content_italic_two={magazineSingleBlogData?.content_italic_two}
          content_three={magazineSingleBlogData?.content_three}
        />
      </div>
    </div>
  );
};

export default MagazSticky;
