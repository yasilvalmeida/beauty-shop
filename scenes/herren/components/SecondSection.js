import FirstAddSection from "../../../shareable/FirstAddSection";

const SecondSection = ({sectionTextData}) => {
  const background = "black";
  const textcolor = "white";
  const padding = "105px";

  return (
    <>
      <FirstAddSection
        background={background}
        textcolor={textcolor}
        padding={padding}
        sectionTextData={sectionTextData}
      />
    </>
  );
};

export default SecondSection;
