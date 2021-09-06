import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const NewsLetter = () => {
  const router = useRouter();
  const { kontoPageTextData } = useSelector((state) => state.konto);

  return (
    <div className={"newsletter__container"}>
      <div className={"newsletter__container__text"}>
        <h2>{kontoPageTextData?.newsletter_header}</h2>
        <p className={"newsletter__container__text--el2"}>
          {kontoPageTextData?.newsletter_title}
        </p>
        <p className={"newsletter__container__text--el3"}>
          {kontoPageTextData?.newsletter_text}
        </p>
        <div className={"zuruck_back_body"}>
          <button
            className={"zuruck_back"}
            onClick={() => router.push("/konto/main")}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={"head-search-icon"}
            />{" "}
            {kontoPageTextData?.adress_back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;