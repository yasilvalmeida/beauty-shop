import RecommendationScene from "../scenes/recommendation";

const Recommendation = () => {

  return (
    <>
      <RecommendationScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Recommendation;
