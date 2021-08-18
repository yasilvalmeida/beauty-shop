import AboutTwoProducts from "../../../../shareable/abouttwoproducts/AboutTwoProducts";

const ThirdAboutSection = ({ aboutText, products }) => {
  return (
    <>
      <div className="third-about-section-all">
        <div className={"third-about-section-right"}>
          <h2>{aboutText?.section_three_title}</h2>
          <p className={"section"}>{aboutText?.section_three_paragraph}</p>
          <AboutTwoProducts aboutText={aboutText} products={products} />
        </div>
        <div className={"third-about-section-left"}>
          {aboutText?.section_image_cover?.map((image, i) => {
            return (
              <div
                className={"liljana-div"}
                style={{ backgroundImage: `url(${image?.url})` }}
                key={i}
              ></div>
            );
          })}
          {aboutText?.section_image_sign?.map((image, i) => {
            return <img src={image?.url} alt="Liljanas autograph" key={i} />;
          })}
          <p>{aboutText?.section_occupation}</p>
        </div>
      </div>
    </>
  );
};

export default ThirdAboutSection;
