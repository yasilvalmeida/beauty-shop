import BrandsScene from "../scenes/brands";

const Brands = () => {
  return (
    <>
      <BrandsScene />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Brands;
