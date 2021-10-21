import MagazinProductsWhite from "../../../../shareable/Products/magazin-products/MagazinWhiteProducts";

const ArtikelTwoProducts = ({ products }) => {
  return (
    <div className={"magaz__artikel__two__products__container"}>
      {products?.length > 0 && products?.map((e, i) => {
        return (
          <div key={i} className={"productdivmartop"}>
            <MagazinProductsWhite elem={e} />
          </div>
        );
      })}
    </div>
  );
};

export default ArtikelTwoProducts;
