import { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Link from "next/link";

const VideosContainer = ({ video, changeVideo, addToBookmark }) => {
  const [play, setPlay] = useState(false);
  return (
    <div className={"col-lg-4 small-vid-bod"}>
      <div className={"video-small-body-only"}>
        <ReactPlayer
          url={video?.video?.url}
          muted={true}
          width="100%"
          height="100%"
          playing={play}
          id={"videoBG"}
        />
        <img
          src="/play.png"
          alt="play"
          /* onClick={() => {
            alert(play);
            if (!play) {
              setPlay(true);
            } else {
              setPlay(false);
            }
          }} */
          style={play ? { display: "none" } : null}
          onClick={() => {
            if (changeVideo !== "no") {
              changeVideo(video);
            }
            setPlay(true);
          }}
        />
        <svg
          version="1.1"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          onClick={() => {
            setPlay(false);
          }}
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
            <line className="st0" x1="197.8" y1="430.8" x2="197.8" y2="81.2" />
            <line className="st0" x1="314.2" y1="430.8" x2="314.2" y2="81.2" />
          </g>
        </svg>
      </div>
      <div className={"small-vid-text"}>
        <div className={"a"}>
          <p> {video?.type} </p>
          {video?.favorite ? (
            <div style={{ marginTop: "25px" }}>
              <Image
                src="/bookmark_filled.png"
                alt="bookmark"
                width={17}
                height={17}
                onClick={() => addToBookmark(video.id)}
              />
            </div>
          ) : (
            <div style={{ marginTop: "25px" }}>
              <Image
                src="/bookmark.png"
                alt="bookmark"
                width={17}
                height={17}
                onClick={() => addToBookmark(video.id)}
              />
            </div>
          )}
        </div>
        <h2>{video?.name}</h2>
        <span>{video?.description}</span>
        <Link href={`${video?.url} || "/shop"`}>
          <a href={`${video?.url} || "/shop"`}>{video?.button}</a>
        </Link>
      </div>
    </div>
  );
};

export default VideosContainer;
