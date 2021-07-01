import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getNavbar } from '../../services/actions/homepage__stable';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const navlist = useSelector((state) => state.navbar.navList);
  const dispatch = useDispatch();
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    dispatch(getNavbar());
  }, []);

  useEffect(() => {
    setNavList(navlist);
  }, [navlist]);

  const route = useRouter();

  return (
    <>
      <div className={'navbar-body'}>
        <div className={'navbar-all'}>
          <nav>
            <ul className={'main-nav'}>
              {navList.map((e, i) => {
                return (
                  <li
                    key={i}
                    className={`main-list ${
                      e.categories.length > 0 ? 'main-list-with-hover' : ''
                    }`}
                  >
                    <Link
                      exact
                      href={ `/${e?.item_name.toLowerCase() || ''}`}
                    >
                      <a
                        href="#"
                        className={`hovered-top-link ${
                          route.pathname === e.item_name.toLowerCase()
                            ? 'active-navbar'
                            : ''
                        }`}
                        href={e?.item_name?.toLowerCase()}
                        style={
                          route.pathname.substring(1) ===
                          e?.item_name?.toLowerCase()
                            ? { WebkitTextStroke: '1px' }
                            : null
                        }
                      >
                        {e.item_name}
                      </a>
                    </Link>
                    <div className={'relative-nav'}>
                      <div className={'absolute-white'}></div>
                    </div>
                    {e.categories.length > 0 ? (
                      <>
                        <div className={'hovered'}>
                          {e.categories.map((category) => (
                            <div
                              className={' nav-hov-links '}
                              key={category.id}
                            >
                              <h2>{category.CategoryName}</h2>
                              {category.subCategories.length
                                ? category.subCategories.map((subC) => (
                                    <Link href={'/a-z'} key={subC.id}>
                                      {subC.SubCategoryName}
                                    </Link>
                                  ))
                                : null}
                            </div>
                          ))}

                          {e?.images && (
                            <div className='col-lg-3 image-cont'>
                              <Link href={`${e?.url || ''}`}>
                                <div
                                  style={{
                                    backgroundImage: `url(${e?.images?.formats?.small?.url})`,
                                  }}
                                ></div>
                              </Link>

                              <Link href={`${e?.url || ''}`}>
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
    </>
  );
};

export default Navbar;
