import MagazinScene from "../scenes/magazin";

const Magazine = () => {
  return (
    <>
      <MagazinScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Magazine;
