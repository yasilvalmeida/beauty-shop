import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const FirstElement = ({ next, previous, image }) => {
  const route = useRouter();
  const { id } = route.query;
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  return (
    <div
      className={"carousel__body__artikel__first"}
      style={{
        background: `url(${image?.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <span className={"backto"}>
        <Link href={`/article/${id}`} onClick={() => route.back()}>
          {magazineSingleArticleData?.gallery_back}
        </Link>
      </span>

      <div className={"carousel__body__artikel__first__mid"}>
        <p className={"carousel__body__artikel__first__mid--txt1"}>
          {magazineSingleArticleData?.gallery_small_text}
        </p>
        <h2 className={"carousel__body__artikel__first__mid--txt2"}>
          {magazineSingleArticleData?.gallery_bigger_text}
        </h2>
        <p className={"carousel__body__artikel__first__mid--txt3"}>
          {magazineSingleArticleData?.gallery_normal_text}
        </p>
      </div>
      <div className={"carousel__body__artikel__first__bot"}>
        <p>Foto {magazineSingleArticleData?.gallery_photo_author}</p>
        <p>Styling {magazineSingleArticleData?.gallery_styling}</p>
      </div>
      <button className={"leftbtn"} onClick={previous}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="pu cd dr pv pw px kn"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 24H0V0h24z"></path>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"
            ></path>
          </g>
        </svg>
      </button>
      <button className={"rightbtn"} onClick={next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="pu n dr pv pw px kn"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 24H0V0h24z"></path>
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default FirstElement;
