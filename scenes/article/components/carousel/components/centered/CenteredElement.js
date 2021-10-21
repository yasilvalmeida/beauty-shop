import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const CenteredElement = ({ next, previous, image }) => {
  const route = useRouter();
  const { id } = route.query;
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  return (
    <div
      className={"centered__artikel__carousel"}
      style={{
        background: `url(${image?.url})`,
        backgroundRepeat: "no-repeat",
        /* backgroundSize: "cover", */
      }}
    >
      <span className={"backto"}>
        <Link href={`/article/${id}`} onClick={() => route.back()}>
          {magazineSingleArticleData?.gallery_back}
        </Link>
      </span>
      <div className={"centered__artikel__carousel__img"}></div>
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

export default CenteredElement;
