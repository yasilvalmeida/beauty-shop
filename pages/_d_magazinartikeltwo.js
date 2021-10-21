
import MagazinArtikelSceneTwo from "../scenes/magazin-artikel-scene-two";
const MagazinTwo = () => {
  return (
    <>
      
      <MagazinArtikelSceneTwo />
      
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default MagazinTwo;
