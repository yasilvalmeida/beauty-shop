import MagazinProducts from "../../../../shareable/Products/magazin-products/MagazinProducts";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const { magazinePageTextData } = useSelector((state) => state.magazine);
  const products = [
    {
      id: 0,
      nohovertext1: magazinePageTextData?.product_subtitle,
      nohovertext2: magazinePageTextData?.product_text,
      name: "Ylumi",
      type: "energy kapseln",
      type2: "kapseln",
      price: "28,00 €",
      image: "/item.png",
    },
    {
      id: 1,
      nohovertext1: magazinePageTextData?.product_subtitle,
      nohovertext2: magazinePageTextData?.product_text,
      name: "Ylumi",
      type: "energy kapseln",
      type2: "kapseln",
      price: "28,00 €",
      image: "/item.png",
    },
    {
      id: 2,
      nohovertext1: magazinePageTextData?.product_subtitle,
      nohovertext2: magazinePageTextData?.product_text,
      name: "Ylumi",
      type: "energy kapseln",
      type2: "kapseln",
      price: "28,00 €",
      image: "/item.png",
    },
    {
      id: 3,
      nohovertext1: magazinePageTextData?.product_subtitle,
      nohovertext2: magazinePageTextData?.product_text,
      name: "Ylumi",
      type: "energy kapseln",
      type2: "kapseln",
      price: "28,00 €",
      image: "/item.png",
    },
  ];
  return (
    <div className={"magazin-products-body"}>
      <div className={"magazin-products-body-container"}>
        <h3 className={"magaz-prod-title"}>
          {magazinePageTextData?.product_title}
        </h3>
        <div className={"magazin-products-list-body"}>
          {products.map((e, i) => {
            return (
              <div key={i}>
                <MagazinProducts elem={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
