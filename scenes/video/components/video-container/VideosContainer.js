import SmallVideoContainer from '../small-video-container/SmallVideoContainer';
import {useDispatch} from "react-redux";
import {addToBookmark, changeVideoList} from "../../../../services/actions/video";

const VideosContainer = ({videos,activeIndex,setActiveIndex}) => {
  const dispatch = useDispatch()
  const changeSelectedHandler = e =>{
    setActiveIndex(e.id)
    dispatch(changeVideoList(e.id))
  }

  const addToBookmarkHandler = e =>{
    dispatch(addToBookmark(e))
  }
  return (
    <div className='videos__container'>
      {videos.map((e,i) => (
        <SmallVideoContainer key={i} video={e} activeIndex={activeIndex} changeVideo={changeSelectedHandler} addToBookmark={addToBookmarkHandler}/>
      ))}
    </div>
  );
};

export default VideosContainer;
