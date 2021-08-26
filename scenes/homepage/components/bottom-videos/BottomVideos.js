import ReactPlayer from "react-player";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const BottomVideo = () => {
  const { videoData } = useSelector((state) => state.video);
  const plays = [false, false, false, false];
  const [play, setPlay] = useState(plays);
  const y = useRef();
  return (
    <>
      <div
        className={"bottom-video-body"}
        style={{ marginBottom: "12rem" }}
        ref={y}
      >
        {videoData?.map((video, i) => {
          if (i > 0 && i < 4) {
            return (
              <div className={"small-vid-bod"}>
                <div className={"video-small-body-only"}>
                  <ReactPlayer
                    url={video?.video?.url !== undefined ? video?.video?.url : "/video.webm"}
                    muted={true}
                    width="100%"
                    height="100%"
                    playing={play[i]}
                    id={"videoBG"}
                  />
                  <img
                    src="/play.png"
                    alt="play"
                    onClick={() => {
                      plays[i] = true;
                      setPlay(plays);
                    }}
                    style={play[i] ? { display: "none" } : null}
                  />
                  <svg
                    version="1.1"
                    id="Ebene_1"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      plays[i] = false;
                      setPlay(plays);
                    }}
                    xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    space="preserve"
                    style={
                      !play[i]
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
                            width: "7.5rem",
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
                  <p>{video?.type}</p>
                  <h2>{video?.name}</h2>
                  <span>{video?.description}</span>
                  <a href={video?.url !== undefined ? video?.url : "/shop"}>
                    {video?.button}
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default BottomVideo;
