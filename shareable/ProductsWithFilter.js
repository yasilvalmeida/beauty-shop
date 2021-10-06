import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addToBasket } from "../services/actions/basket";
import {
  addToWishList,
  addToWishListTwo,
  getProductsByCategories,
} from "../services/actions/products";
import ProductInformation from "../shareable/Products/ProductInformation";
import Loader from "../shareable/Loader";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const ProductsWithFilter = ({ position }) => {
  const dispatch = useDispatch();
  let headers = [
    { lang: "de", header: "Männerpflege" },
    { lang: "en", header: "Men grooming" },
    { lang: "fr", header: "Hommes de toilettage" },
  ];
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const navListState = useSelector((state) => state.navbar.navList);
  let top3Categories;
  let start = 1;
  let limit;
  if (position === "HerrenPageOne") {
    top3Categories = [];
    limit = 8;
    navListState.map((element, i) => {
      let tmp = element?.filter((cat) => cat?.categoryId === 445);
      if (tmp?.length > 0) top3Categories.push(tmp);
    });
    top3Categories.push([
      { categoryId: 545, lang: "de", name: "SCHÖNHEIT" },
      { categoryId: 545, lang: "en", name: "BEAUTY" },
    ]);
    top3Categories.push([
      { categoryId: 645, lang: "de", name: "INTERIEUR" },
      { categoryId: 645, lang: "en", name: "INTERIEUR" },
    ]);
  } else if (position === "HerrenPageTwo") {
    headers = [
      { lang: "de", header: "DÜFTE FÜR HERREN" },
      { lang: "en", header: "Fragrances For Man" },
      { lang: "fr", header: "Parfums pour hommes" },
    ];
    top3Categories = [];
    limit = 8;
    start = 8;
    navListState.map((element, i) => {
      let tmp = element?.filter((cat) => cat?.categoryId === 445);
      if (tmp?.length > 0) top3Categories.push(tmp);
    });
    top3Categories.push([
      { categoryId: 545, lang: "de", name: "SCHÖNHEIT" },
      { categoryId: 545, lang: "en", name: "BEAUTY" },
    ]);
    top3Categories.push([
      { categoryId: 645, lang: "de", name: "INTERIEUR" },
      { categoryId: 645, lang: "en", name: "INTERIEUR" },
    ]);
  } else if (position === "HomePage") {
    top3Categories = navListState.slice(0, 3);
    limit = 4;
  } else if (position === "Recommendation") {
    headers = [
      { lang: "de", header: "Von uns für sie" },
      { lang: "en", header: "From us for you" },
      { lang: "fr", header: "De nous pour vous" },
    ];
    top3Categories = [];
    navListState.map((element, i) => {
      let tmp = element?.filter((cat) => cat?.categoryId === 445);
      if (tmp?.length > 0) top3Categories.push(tmp);
    });
    top3Categories.push([
      { categoryId: 545, lang: "de", name: "SCHÖNHEIT" },
      { categoryId: 545, lang: "en", name: "BEAUTY" },
    ]);
    top3Categories.push([
      { categoryId: 645, lang: "de", name: "INTERIEUR" },
      { categoryId: 645, lang: "en", name: "INTERIEUR" },
    ]);
    limit = 4;
  }
  const [headtext, setHeadtext] = useState(headers[0]?.header);
  const [defaultCategory, setDefaultCategory] = useState(0);
  const lang = useSelector((state) => state.header.headerLanguage);
  const productsByCategoriesState = useSelector(
    (state) => state.products.productsByCategories
  );
  const [productsByCategories, setProductsByCategories] = useState([]);

  useEffect(() => {
    const foundHeader = headers?.find((header) => header?.lang === lang);
    const { header } = foundHeader;
    setHeadtext(header);
    const categoriesIds = [];
    top3Categories?.map((elem, i) => {
      const filter =
        elem.filter((detail) => detail.lang === lang)?.length > 0
          ? elem.filter((detail) => detail.lang === lang)
          : elem;
      const e = filter[0];
      const { categoryId, name } = e;
      categoriesIds.push({
        id: categoryId,
        name,
      });
    });
    console.log("aux", position, start, limit);
    dispatch(
      getProductsByCategories(start, limit, categoriesIds, lang, position)
    );
  }, [navListState, lang]);

  useEffect(() => {
    setProductsByCategories(productsByCategoriesState);
  }, [productsByCategoriesState]);

  const addToFavorites = (id, variantId) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    if (position === "HerrenPageTwo") {
      dispatch(
        addToWishListTwo(
          id,
          variantId,
          parfum
            ? "parfums"
            : beauty
            ? "beauties"
            : interiour
            ? "interieurs"
            : null
        )
      );
    } else {
      dispatch(
        addToWishList(
          id,
          variantId,
          parfum
            ? "parfums"
            : beauty
            ? "beauties"
            : interiour
            ? "interieurs"
            : null
        )
      );
    }
  };

  const addProductToBasket = (id, variantId, quantity) => {
    if (!isAuthenticated) {
      return router.push("/login");
    }
    dispatch(addToBasket(id, variantId, quantity));
  };

  const toProductPage = (e) => {
    if (router.pathname !== "/products") {
      router.push(`/products/${e}`);
    } else {
      router.push(e);
    }
  };

  const toApproved = () => {
    router.push("/magazinartikelone");
  };

  return (
    <>
      <div className={"filtered-products-body d-flex flex-wrap"}>
        <div className={"products-filter-head-home"}>
          <h2>{headtext}</h2>
          <div className={"d-flex filter-btns"}>
            {top3Categories?.map((elem, i) => {
              const filter =
                elem.filter((detail) => detail.lang === lang)?.length > 0
                  ? elem.filter((detail) => detail.lang === lang)
                  : elem;
              const e = filter[0];
              return (
                <button
                  key={i}
                  className={`col-lg-4 ${
                    defaultCategory === i ? "active-filter" : null
                  }`}
                  onClick={() => {
                    setDefaultCategory(i);
                  }}
                >
                  {e.name}
                </button>
              );
            })}
          </div>
        </div>
        {productsByCategories?.length === 0 ? (
          <Loader type={"component"} />
        ) : (
          <div>
            <div className={"products-with-filter-list"}>
              {productsByCategories[defaultCategory]?.products?.map((e, i) => {
                return (
                  <div className={"first-prod-items col-lg-3"} key={i}>
                    <ProductInformation
                      e={e}
                      moment={moment}
                      formatter={formatter}
                      addToFavorites={addToFavorites}
                      addProductToBasket={addProductToBasket}
                      toProductPage={toProductPage}
                      toApproved={toApproved}
                      router={router}
                      isAuthenticated={isAuthenticated}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsWithFilter;
