import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {  useSelector } from "react-redux";

export default function MobileNotFound() {
  const { notFoundData } = useSelector((state) => state.notFoundReducer);
  
  return (
    <div className="mobile__container">
      <div className="mobile__container__notFound__text">
        <span>404</span>

        <div>
          <Image
          src={notFoundData?.section1?.images.url || "/item.png"}
          alt="Picture"
            width={940}
            height={624.7}
            className="image"
            objectFit="cover"
          />
        </div>
        <p>
        {notFoundData?.section1?.description}
        </p>
        <div>
          <div>
            <FontAwesomeIcon icon={faSearch} className={"mobile-search-icon"} />
            <input type="text" placeholder="SUCHBEGRIFF EINGEBEN" />
          </div>
          <button>ABSENDEN</button>
        </div>
      </div>
    </div>
  );
}
