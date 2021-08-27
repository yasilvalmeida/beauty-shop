import LexikonScene from "../scenes/lexikon";

const Lexikon = () => {
  return (
    <>
      <LexikonScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}
export default Lexikon;
