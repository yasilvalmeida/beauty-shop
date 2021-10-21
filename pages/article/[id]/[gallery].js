import CarouselArtikel from "../../../scenes/article/components/carousel/CarouselArtikel";

const MagazinElement = () => {
  return (
    <>
      <CarouselArtikel />
    </>
  );
};
/* export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths(params) {
  const data = [1];
  return {
    paths: data?.map((e) => {
      return {
        params: { gallery: `${e}` },
      };
    }),
    fallback: false,
  };
} */

export default MagazinElement;
