import ComponentHeader from "../../shareable/component-header/ComponentHeader";
import MediatekInfo from "./components/mediatek-info/MediatekInfo";
import VideoPart from "../homepage/components/video/VideoPart";
import VideosContainer from "./components/video-container/VideosContainer";
import Social from "../../shareable/social/Social";
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import Loader from "../../shareable/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserDataFromLocalStorage } from "../../services/actions/auth";
import {
  filterVideos,
  getVideoData,
  getVideoText,
} from "../../services/actions/video";

const Video = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.header.headerLanguage);
  const { filtered } = useSelector((state) => state.video);
  const { videoTextLoaded, videoTextData, videoLoaded, videoData } =
    useSelector((state) => state.video);
  const [activeIndex, setActiveIndex] = useState();
  const [infoFilter, setInfoFilter] = useState({ type: "", checked: false });
  const info = videoData?.map((e) => {
    return e.type.toUpperCase();
  });

  console.log("aux-data", videoData);
  console.log("aux-type", info);

  useEffect(() => {
    //setActiveIndex(videoData[0]?.id);
  }, [videoLoaded]);
  useEffect(() => {
    let a = [];
    videoData?.map((e) => {
      if (e.type.toUpperCase() === infoFilter.type) {
        a.push(e);
      }
    });
    if (infoFilter.type !== "" && infoFilter.checked) {
      dispatch(filterVideos(a));
    } else dispatch(filterVideos([]));
  }, [infoFilter]);
  useEffect(() => {
    dispatch(getUserDataFromLocalStorage());
  }, []);
  useEffect(() => {
    dispatch(getVideoText(lang));
    dispatch(getVideoData(lang));
  }, [lang]);
  useEffect(() => {
    if (filtered.length !== 0) {
      setActiveIndex(filtered[0]?.id);
    }
  }, [filtered]);

  return (
    <div>
      {videoTextLoaded && videoLoaded ? (
        <Loader type={"component"} />
      ) : (
        <>
          <ComponentHeader
            info={videoTextData?.header}
            title={videoTextData?.title}
          />
          <MediatekInfo
            info={info}
            setInfo={setInfoFilter}
            checked={infoFilter.checked}
            filter={infoFilter}
          />
          <VideoPart
            text={videoTextData?.text}
            video={
              filtered.length !== 0
                ? filtered.find((item) => item.id === activeIndex)
                : videoData?.find((item) => item.id === activeIndex)
            }
          />
          <VideosContainer
            videos={filtered.length !== 0 ? filtered : videoData}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </>
      )}
      <Social />
      <NewsletterRep />
    </div>
  );
};

export default Video;
