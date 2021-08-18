import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NotFound({ notFoundText }) {
  const router = useRouter();
  const [word, setWord] = useState("");
  const handleSearch = () => {
    if (word && word !== "") {
      router.push(`/search/${word}`);
    }
  };
  return (
    <div className="container">
      <div className="container__notFound__text">
        <h2>{notFoundText?.section_one_title}</h2>
        <span>404</span>
        <p>{notFoundText?.section_one_description}</p>
        <div>
          <FontAwesomeIcon icon={faSearch} className={"search-icon"} />
          <input
            type="text"
            placeholder={notFoundText?.search_input}
            onChange={(e) => {
              setWord(e?.target?.value);
            }}
            onKeyPress={(e) => {
              if (e?.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
        <button onClick={handleSearch}>{notFoundText?.search_button}</button>
      </div>

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
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
