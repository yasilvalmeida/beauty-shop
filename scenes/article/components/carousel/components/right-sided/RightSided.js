import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const RightSided = ({ next, previous, image }) => {
  const route = useRouter();
  const { id } = route.query;
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("den look shoppen");
  useEffect(() => {
    switch (clicked) {
      case true:
        setText("Schliessen");
        break;
      case false:
        setText("den look shoppen");
        break;
    }
  }, [clicked]);
  return (
    <div className={"carousel__artikel__right"}>
      <span className={"backto"}>
        <Link href={`/article/${id}`} onClick={() => route.back()}>
          {magazineSingleArticleData?.gallery_back}
        </Link>
      </span>
      <div className={"carousel__artikel__right__mainimg"}>
        <img
          className={!clicked ? "closedimg" : "openedimg"}
          src={image?.url}
          alt=""
        />
        <div className={"carousel__artikel__right__mainimg__openingdiv"}>
          <div className={!clicked ? "closed" : "opened"}>ahbedahsbgs</div>
          {/* <p onClick={() => setClicked(!clicked)}>{text}</p> */}
        </div>
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

export default RightSided;
