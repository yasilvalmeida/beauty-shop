import AboutTwoProducts from "../../../../shareable/abouttwoproducts/AboutTwoProducts";

const SecondAboutSection = ({ aboutText, products }) => {
  return (
    <>
      <div className="second-about-section-all">
        <div className={"second-about-section-left"}>
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
        <div className={"second-about-section-right"}>
          <h2>{aboutText?.section_two_title}</h2>
          <p className={"section"}>{aboutText?.section_two_paragraph_one}</p>
          <p>{aboutText?.section_two_paragraph_two}</p>
          <AboutTwoProducts aboutText={aboutText} products={products} />
        </div>
      </div>
    </>
  );
};

export default SecondAboutSection;
