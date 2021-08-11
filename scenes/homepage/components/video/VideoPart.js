import { useState } from "react";
import ReactPlayer from "react-player";

const VideoPart = ({ text, video }) => {
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={"video-body"} style={{ marginBottom: "6rem" }}>
        <ReactPlayer
          url={video?.video?.url || "/video.webm"}
          muted={true}
          width="100%"
          height="120vh"
          playing={play}
          id={"videoBG"}
          style={{ position: "absolute", top: "-20vh", left: "0" }}
          className={"video-elem-big"}
        />
        <img
          style={play ? { display: "none" } : null}
          className={"playvideohome"}
          src="/play.png"
          alt="play"
          onClick={() => {
            setPlay(true);
          }}
        />
        <svg
          version="1.1"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setPlay(false);
          }}
          className={"pausevideohome"}
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          space="preserve"
          style={
            !play
              ? {
                  fill: "none",
                  stroke: "white",
                  strokeWidth: "25",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "10",
                  position: "absolute",
                  width: "10.5rem",
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
                  width: "10.5rem",
                  left: "46.5%",
                }
          }
        >
          <g>
            <line className="st0" x1="197.8" y1="430.8" x2="197.8" y2="81.2" />
            <line className="st0" x1="314.2" y1="430.8" x2="314.2" y2="81.2" />
          </g>
        </svg>
        <p style={play ? { display: "none" } : null}>{text}</p>
      </div>
    </>
  );
};

export default VideoPart;
