import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Nutzerdaten = () => {
  const router = useRouter();
  const { kontoPageTextData } = useSelector((state) => state.konto);

  return (
    <div className={"user__container"}>
      <div className={"user__container__text"}>
        <h2>{kontoPageTextData?.user_header}</h2>
        <p className={"user__container__text--el2"}>
          {kontoPageTextData?.user_title}
        </p>
        <p className={"user__container__text--el3"}>
          {kontoPageTextData?.user_text}
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

export default Nutzerdaten;