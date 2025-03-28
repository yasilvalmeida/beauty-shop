import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";

const ArtikelFirstSection = ({ resume, author, category, date }) => {
  const { socialUrlData } = useSelector((state) => state.social);
  return (
    <div className={"artikel__first__container"}>
      <div className={"artikel__first__container__text"}>
        <div>
          <p className={"artikel__first__container--text1"}>{resume}</p>
          <p className={"artikel__first__container--text2"}>Autor: {author}</p>
        </div>
      </div>
      <div className={"artikel__first__container__social"}>
        <p>{category}</p>
        <p className={"date-dufte"}>{moment(date).format("DD.MM.YYYY")}</p>
        <Link href={socialUrlData?.facebook || "https://www.facebook.com"}>
          <a href={socialUrlData?.facebook} target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Link>
        <Link href={socialUrlData?.instagram || "https://www.instagram.com"}>
          <a href={socialUrlData?.instagram} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Link>
        <Link href={socialUrlData?.twitter || "https://www.twitter.com"}>
          <a href={socialUrlData?.twitter} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Link>
        <Link href={socialUrlData?.pinterest || "https://www.pinterest.com"}>
          <a href={socialUrlData?.pinterest} target="_blank">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"bookmarksvg"}
          xlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <image
            id="Изображение_133"
            data-name="Изображение 133"
            width="20"
            height="20"
            href="data:image/png;base64,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"
          />
        </svg>
      </div>
    </div>
  );
};

export default ArtikelFirstSection;
