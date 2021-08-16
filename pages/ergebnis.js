import ErgebnisScene from "../scenes/ergebins";

const Ergebnis = () => {
  return (
    <>
      <ErgebnisScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Ergebnis;