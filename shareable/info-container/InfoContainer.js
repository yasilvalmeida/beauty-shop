import { useSelector } from "react-redux";

const InfoContainer = ({ className, type }) => {
  const { shopPageTextData } = useSelector((state) => state.shop);
  return (
    <div className={className}>
      <div className={`${className}__content`}>
        <span className={`${className}__content--title`}>
          {type === "one"
            ? shopPageTextData?.section_one_header
            : shopPageTextData?.section_two_header}
        </span>
        <span className={`${className}__content--text`}>
          {type === "one"
            ? shopPageTextData?.section_one_title
            : shopPageTextData?.section_two_title}
        </span>
        <span className={`${className}__content--description`}>
          {type === "one"
            ? shopPageTextData?.section_one_text
            : shopPageTextData?.section_two_text}
        </span>
      </div>
      <div className={`${className}__image`}>
        <img
          src={`${
            type === "one"
              ? shopPageTextData?.section_one_image?.length > 0
                ? shopPageTextData?.section_one_image[0]?.url
                : "/productbotleft.png"
              : shopPageTextData?.section_two_image?.length > 0
              ? shopPageTextData?.section_two_image[0]?.url
              : "/productbotleft.png"
          }`}
        />
      </div>
    </div>
  );
};

export default InfoContainer;
