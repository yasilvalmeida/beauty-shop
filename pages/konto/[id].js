import KontoScene from "../../scenes/konto/index";

const Konto = () => {
  return (
    <>
      <KontoScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "main" } },
      { params: { id: "adressen" } },
      { params: { id: "nutzerdaten" } },
      { params: { id: "bestellungen" } },
      { params: { id: "whishlist" } },
      { params: { id: "newsletter" } },
      { params: { id: "meine" } },
      { params: { id: "lesezeichen" } },
    ],
    fallback: false,
  };
}

export default Konto;
