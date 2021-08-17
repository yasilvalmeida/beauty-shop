const SecondAboutSectionThree = ({
  images,
  right_header_of_the_image,
  right_text1_of_the_image,
  right_text2_of_the_image,
}) => {
  const { url } = images;
  return (
    <>
      <div className="second-about-section-all-three">
        <div className={"second-about-section-left"}>
          <div
            className={"liljana-div"}
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
        <div className={"second-about-section-right"}>
          <h2>{right_header_of_the_image}</h2>
          <p className={"section-text"}>{right_text1_of_the_image}</p>
          <p>{right_text2_of_the_image}</p>
        </div>
      </div>
    </>
  );
};

export default SecondAboutSectionThree;
