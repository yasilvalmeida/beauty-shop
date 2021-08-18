import AboutScene from "../scenes/about";

const About = () => {
  return (
    <>
      <AboutScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
