import MagazinArtikelScene from "../scenes/magazin-artikel-scene";

const Magazin = () => {
  return (
    <>
      <MagazinArtikelScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Magazin;
