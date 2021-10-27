import CarouselArtikel from "../../scenes/article/components/carousel/CarouselArtikel";

const ArticleGallery = () => {
  return (
    <>
      <CarouselArtikel />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths(params) {
  const data = [...Array(10000).keys()];
  return {
    paths: data?.map((e) => {
      return {
        params: { id: `${e}` },
      };
    }),
    fallback: false,
  };
}

export default ArticleGallery;
