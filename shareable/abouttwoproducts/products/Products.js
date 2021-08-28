import Loader from "../../Loader";

const Products = ({ aboutText, products }) => {
  return (
    <>
      {products?.length === 0 ? (
        <Loader type={"component"} />
      ) : (
        <div className={"about-products-list"}>
          {products.map((product, i) => {
            const { name, images } = product;
            return (
              <div key={i}>
                <img
                  src={images[0].url}
                  alt={name}
                  width="200px"
                  height="220px"
                />
                <a href={"/shop"}>
                  {aboutText?.section_product_button}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
