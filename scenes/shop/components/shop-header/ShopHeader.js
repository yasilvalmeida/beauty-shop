import Image from "next/image";
import { useSelector } from "react-redux";

const ShopHeader = () => {
  const { shopPageTextData } = useSelector((state) => state.shop);
  return (
    <div className="shopHeader__container">
      <div className="shopHeader__container__info">
        <span className="shopHeader__container__info--label">
          {shopPageTextData?.top_title}
        </span>
        <span className="shopHeader__container__info--title">
          {shopPageTextData?.top_header}
        </span>
        <span className="shopHeader__container__info--description">
          {shopPageTextData?.top_text}
        </span>
      </div>
      <div className="shopHeader__container__images">
        <Image
          width={941}
          height={624}
          layout="intrinsic"
          src={`${
            shopPageTextData?.top_image?.length > 0
              ? shopPageTextData?.top_image[0]?.url
              : "/productbotleft.png"
          }`}
        />
      </div>
    </div>
  );
};

export default ShopHeader;
