import ReactPlayer from "react-player";
import Image from "next/image";
import { useState } from "react";

const VideoCollapse = (product) => {
  const { elem } = product;
  const [play1, setPlay1] = useState(false);
  return elem?.video ? (
    <div className="videos__container">
      <div className={"col-lg-4 small-vid-bod"}>
        <div className={"video-small-body-only"}>
          <ReactPlayer
            url={elem.video}
            muted={true}
            width="100%"
            height="100%"
            playing={play1}
            id={"videoBG"}
            // light="https://i.stack.imgur.com/zw9Iz.png"
          />
          <img
            src="/play.png"
            alt="play"
            onClick={() => setPlay1(true)}
            style={play1 ? { display: "none" } : null}
          />
          <svg
            version="1.1"
            id="Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setPlay1(false);
            }}
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            space="preserve"
            style={
              !play1
                ? {
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "25",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    position: "absolute",
                    // width: "6rem",
                    display: "none",
                  }
                : {
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "25",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "10",
                    position: "absolute",
                    width: "60px",
                    left: "42%",
                    top: "36%",
                    cursor: "pointer",
                  }
            }
          >
            <g>
              <line
                className="st0"
                x1="197.8"
                y1="430.8"
                x2="197.8"
                y2="81.2"
              />
              <line
                className="st0"
                x1="314.2"
                y1="430.8"
                x2="314.2"
                y2="81.2"
              />
            </g>
          </svg>
        </div>
        <div className={"small-vid-text"}>
          <div className={"a"}>
            <p> Review </p>
          </div>
          <h2>{elem?.name}</h2>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default VideoCollapse;
