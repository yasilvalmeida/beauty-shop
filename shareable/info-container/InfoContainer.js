
const InfoContainer = ({
  className,
  textData
}) => {
  return (
    <div className={className}>
      <div className={`${className}__content`}>
        <span className={`${className}__content--title`}>{textData?.header}</span>
        <span className={`${className}__content--text`}>{textData?.title}</span>
        <span div className={`${className}__content--description`}>
          {textData?.text}
        </span>
      </div>
      <div className={`${className}__image`}>
        <img src={`${textData?.images.url || '/productbotleft.png'}`} />
      </div>
    </div>
  );
};

export default InfoContainer;
