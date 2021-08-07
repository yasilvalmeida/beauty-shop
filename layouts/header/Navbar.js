import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Spin, Space } from "antd";

const Navbar = () => {
  const navListState = useSelector((state) => state.navbar.navList);
  const lang = useSelector((state) => state?.navbar?.selectedLanguage);
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const categories = [];
    navListState?.map((elem, i) => {
      const filters =
        elem.filter((detail) => detail.lang === lang)?.length > 0
          ? elem.filter((detail) => detail.lang === lang)
          : elem;
      const filtered = filters[0];
      const { categoryId, name } = filtered;
      let url = "";
      switch (name) {
        case "Shop":
          url = "shop";
          break;
        case "Magazin":
          url = "magazine";
          break;
        case "Kontakt":
          url = "contact";
          break;
        default:
          url = `shop?category=${categoryId}`;
      }
      const e = {
        id: categoryId,
        name,
        url,
        categories: [],
      };
      categories.push(e);
    });
    setNavList(categories);
  }, [navListState, lang]);

  const route = useRouter();

  return (
    <>
      {navList.length === 0 ? (
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          <div className={"navbar-body"}>
            <div className={"navbar-all"}>
              <nav>
                <ul className={"main-nav"}>
                  {navList.map((e, i) => {
                    return (
                      <li
                        key={i}
                        className={`main-list ${
                          e?.categories?.length > 0
                            ? "main-list-with-hover"
                            : ""
                        }`}
                      >
                        <Link exact href={`/${e?.url}`}>
                          <a
                            className={`hovered-top-link ${
                              route?.pathname === e?.url
                                ? "active-navbar"
                                : ""
                            }`}
                            href={e?.url}
                            style={
                              route?.pathname?.substring(1) ===
                              e?.url
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
                              {e?.categories?.map((category) => (
                                <div
                                  className={" nav-hov-links "}
                                  key={category?.id}
                                >
                                  <h2>{category?.CategoryName}</h2>
                                  {category?.subCategories?.length
                                    ? category?.subCategories?.map((subC) => (
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
                              route.pathname === e?.url ? "active-navbar" : ""
                            }`}
                            href={e?.url}
                            style={
                              route.pathname.substring(1) === e?.url
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
