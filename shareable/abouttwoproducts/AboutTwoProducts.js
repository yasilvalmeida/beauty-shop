import Products from "./products/Products";

const AboutTwoProducts = ({ aboutText, products }) => {
  return (
    <>
      <div className="about-products-body">
        <div className="about-products-title">
          <p>{aboutText?.section_favorities_title}</p>
        </div>
        <div className="about-products-list-body">
          <Products aboutText={aboutText} products={products} />
        </div>
      </div>
    </>
  );
};
export default AboutTwoProducts;
