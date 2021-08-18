import HeadTextShareable from "../../../../shareable/about/head-text/HeadText";

const HeadText = ({ aboutText }) => {
  return (
    <>
      <HeadTextShareable
        text1={aboutText?.section_one_text_one}
        text2={aboutText?.section_one_text_two}
        text3={aboutText?.section_one_description}
      />
    </>
  );
};

export default HeadText;
