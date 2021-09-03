import Loader from "../../shareable/Loader";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSocialUrlText } from "../../services/actions/social";

const Social = ({ page }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { socialUrlLoading, socialUrlData } = useSelector(
    (state) => state.social
  );
  const route = useRouter();
  useEffect(() => {
    dispatch(getSocialUrlText(lang));
  }, [lang]);
  return (
    <>
      {socialUrlLoading ? (
        <Loader type={"component"} />
      ) : (
        <div className="social__container">
          <div className="social__container__title">
            <h4>
              {route.query.id === "whishlist"
                ? socialUrlData?.wishlist_text
                : socialUrlData?.no_wishlist_text}
            </h4>
          </div>
          <div className="social__container__icons">
            <div className="social__container__icons--icon">
              <Link
                href={socialUrlData?.facebook || "https://www.facebook.com"}
              >
                <a href={socialUrlData?.facebook} target="_blank">
                  <Image
                    src="/facebook-icon.png"
                    alt="facebook"
                    width={page === "product-detail" ? 50 : 50}
                    height={page === "product-detail" ? 50 : 50}
                  />
                </a>
              </Link>
            </div>
            <div className="social__container__icons--icon">
              <Link
                href={socialUrlData?.instagram || "https://www.instagram.com"}
              >
                <a href={socialUrlData?.instagram} target="_blank">
                  <Image
                    src="/instagram-icon.png"
                    alt="instagram"
                    width={page === "product-detail" ? 50 : 50}
                    height={page === "product-detail" ? 50 : 50}
                  />
                </a>
              </Link>
            </div>
            <div className="social__container__icons--icon">
              <Link href={socialUrlData?.twitter || "https://www.twitter.com"}>
                <a href={socialUrlData?.twitter} target="_blank">
                  <Image
                    src="/twitter-icon.png"
                    alt="twitter"
                    width={page === "product-detail" ? 50 : 50}
                    height={page === "product-detail" ? 50 : 50}
                  />
                </a>
              </Link>
            </div>
            <div className="social__container__icons--icon">
              <Link
                href={socialUrlData?.pinterest || "https://www.pinterest.com"}
              >
                <a href={socialUrlData?.pinterest} target="_blank">
                  <Image
                    src="/painterest-icon.png"
                    alt="painterest "
                    width={page === "product-detail" ? 50 : 50}
                    height={page === "product-detail" ? 50 : 50}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Social;
