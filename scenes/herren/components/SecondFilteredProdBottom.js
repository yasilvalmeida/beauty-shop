import Neuigkeiten from "../../../shareable/Neuigkeiten";

const SecondFilteredProdBottom = () => {
  const background = "black";
  const color = "white";
  const paddingTop = "165px";
  const paddingBottom = "130px";
  const btntext = "mehr news";
  const width = "31%";
  const padd = "20px 0";

  return (
    <>
      <Neuigkeiten
        background={background}
        color={color}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        btntext={btntext}
        width={width}
        padd={padd}
      />
    </>
  );
};
export default SecondFilteredProdBottom;
