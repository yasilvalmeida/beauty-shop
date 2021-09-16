import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MobileNotFound({ notFoundText }) {
  const router = useRouter();
  const [word, setWord] = useState("");
  const handleSearch = () => {
    if (word && word !== "") {
      router.push(`/search/${word}`);
    }
  };
  return (
    <div className="mobile__container">
      <div className="mobile__container__notFound__text">
        <span>404</span>
        <div>
          {notFoundText?.section_one_image?.map((image, i) => {
            return (
              <Image
                src={image?.url || "/item.png"}
                alt="Picture"
                width={940}
                height={624.7}
                className="image"
                objectFit="cover"
                key={`${image?.url}-mobile-${i}`}
              />
            );
          })}
        </div>
        <p>{notFoundText?.section_one_description}</p>
        <div>
          <div>
            <FontAwesomeIcon icon={faSearch} className={"mobile-search-icon"} />
            <input
              type="text"
              placeholder={notFoundText?.search_input}
              onChange={(e) => setWord(e?.target?.value)}
              onKeyPress={(e) => {
                if (e?.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <button onClick={handleSearch}>{notFoundText?.search_button}</button>
        </div>
      </div>
    </div>
  );
}
