import ShopScene from '../scenes/shop';
const Shop = () => {
  return (
    <>
      <ShopScene />
    </>
  );
}

/* export async function getStaticProps() {
    return {
        props: {},
    };
} */
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Shop
