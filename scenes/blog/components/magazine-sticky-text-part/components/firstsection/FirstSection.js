const FirstTextSection = ({
  title,
  content_one,
  content_italic,
  content_two,
}) => {
  return (
    <div className={"magazin__sticky__text__contain"}>
      <h3>{title}</h3>
      <p>{content_one}</p>
      <i>{content_italic}</i>
      <p>{content_two}</p>
    </div>
  );
};
export default FirstTextSection;
