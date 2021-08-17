import ApprovedScene from "../scenes/approved";

const Approved = () => {
  return (
    <>
      <ApprovedScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Approved;
