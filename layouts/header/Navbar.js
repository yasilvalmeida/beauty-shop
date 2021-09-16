import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "../../shareable/Loader";

const Navbar = () => {
  const navListState = useSelector((state) => state.navbar.navList);
  const manufactoryState = useSelector(
    (state) => state.manufactory.manufactories
  );
  const lang = useSelector((state) => state?.header?.headerLanguage);
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const mainCategories = [];
    const manufactories = manufactoryState;
    navListState?.map((elem, i) => {
      const filters =
        elem.filter((detail) => detail.lang === lang)?.length > 0
          ? elem.filter((detail) => detail.lang === lang)
          : elem;
      const filtered = filters[0];
      let { categoryId, name, categories } = filtered;
      let url = "";
      switch (name) {
        case "Typentest":
        case "Type Test":
          url = "typentest/step1";
          break;
        case "Video":
          url = "video";
          break;
        case "Showroom":
          url = "shop";
          break;
        case "Magazin":
        case "Magazine":
          url = "magazine";
          break;
        case "Kontakt":
        case "Contact":
          url = "contact";
          break;
        default:
          url = `shop?category=${categoryId}`;
      }
      if (categoryId === 444) {
        url = "marken";
        categories = manufactories;
      }
      if (categoryId === 446) {
        url = "herren";
      }
      const e = {
        id: categoryId,
        name,
        url,
        categories,
      };
      mainCategories.push(e);
    });
    setNavList(mainCategories);
  }, [navListState, manufactoryState, lang]);

  const route = useRouter();

  return (
    <>
      {navList.length === 0 ? (
        <Loader type={"component"} />
      ) : (
        <>
          <div className={"navbar-body"}>
            <div className={"navbar-all"}>
              <nav>
                <ul className={"main-nav"}>
                  {navList.map((e, i) => {
                    return (
                      <li
                        key={`${i}-${e?.url}`}
                        className={`main-list ${
                          e?.categories?.length > 0
                            ? "main-list-with-hover"
                            : ""
                        }`}
                      >
                        <Link exact href={`/${e?.url}`}>
                          <a
                            className={`hovered-top-link ${
                              route?.asPath === e?.url ? "active-navbar" : ""
                            }`}
                            href={e?.url}
                            style={
                              route?.asPath?.substring(1) === e?.url
                                ? { WebkitTextStroke: "1px" }
                                : null
                            }
                          >
                            {e?.name}
                          </a>
                        </Link>
                        <div className={"relative-nav"}>
                          <div className={"absolute-white"}></div>
                        </div>
                        {e?.categories?.length > 0 ? (
                          <>
                            <div className={"hovered"}>
                              <ul>
                                {e?.categories?.map((category, i) => (
                                  <li
                                    className={"nav-hov-links"}
                                    key={`${category?.id}-${i}`}
                                  >
                                    <Link
                                      href={
                                        e?.id === 444
                                          ? `/brand/${category?.id}`
                                          : `/shop?category=${category?.id}`
                                      }
                                    >
                                      {category.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              {e?.images && (
                                <div className="col-lg-3 image-cont">
                                  <Link href={`${e?.url || ""}`}>
                                    <div
                                      style={{
                                        backgroundImage: `url(${e?.images?.formats?.small?.url})`,
                                      }}
                                    ></div>
                                  </Link>

                                  <Link href={`${e?.url}`}>
                                    <h2>{e?.title}</h2>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className={"navbar-body"}>
            <div className={"navbar-all"}>
              <nav>
                <ul className={"main-nav"}>
                  {navList.map((e, i) => {
                    return (
                      <li key={i} className={`main-list`}>
                        <Link exact href={`/${e?.url || ""}`}>
                          <a
                            href="#"
                            className={`hovered-top-link ${
                              route.asPath === e?.url ? "active-navbar" : ""
                            }`}
                            href={e?.url}
                            style={
                              route.asPath.substring(1) === e?.url
                                ? { WebkitTextStroke: "1px" }
                                : null
                            }
                          >
                            {e?.name}
                          </a>
                        </Link>
                        <div className={"relative-nav"}>
                          <div className={"absolute-white"}></div>
                        </div>
                        {e?.categories?.length > 0 ? (
                          <>
                            <div className={"hovered"}>
                              {e?.categories.map((category) => (
                                <div
                                  className={" nav-hov-links "}
                                  key={category?.id}
                                >
                                  <h2>{category?.CategoryName}</h2>
                                  {category?.subCategories?.length
                                    ? category?.subCategories.map((subC) => (
                                        <Link href={"/a-z"} key={subC?.id}>
                                          {subC?.SubCategoryName}
                                        </Link>
                                      ))
                                    : null}
                                </div>
                              ))}

                              {e?.images && (
                                <div className="col-lg-3 image-cont">
                                  <Link href={`${e?.url || ""}`}>
                                    <div
                                      style={{
                                        backgroundImage: `url(${e?.images?.formats?.small?.url})`,
                                      }}
                                    ></div>
                                  </Link>

                                  <Link href={`${e?.url || ""}`}>
                                    <h2>{e?.title}</h2>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default Navbar;
