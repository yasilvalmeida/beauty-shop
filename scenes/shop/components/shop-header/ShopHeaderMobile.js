import Image from "next/image";
import { useSelector } from "react-redux";

const ShopHeaderMobile = () => {
  const { shopPageTextData } = useSelector((state) => state.shop);
  return (
    <div className="shopHeader__container__mobile">
      <div className="shopHeader__container__info">
        <span className="shopHeader__container__info--label">
          {shopPageTextData?.top_title}
        </span>
        <span className="shopHeader__container__info--title">
          {shopPageTextData?.top_header}
        </span>
        <div className="shopHeader__container__images">
          <Image
            width={941}
            height={624}
            layout="responsive"
            src={`${
              shopPageTextData?.top_image?.length > 0
                ? shopPageTextData?.top_image[0]?.url
                : "/productbotleft.png"
            }`}
          />
        </div>
        <span className="shopHeader__container__info--description">
          {shopPageTextData?.top_text}
        </span>
      </div>
    </div>
  );
};

export default ShopHeaderMobile;
