import SmallVideoContainer from "../../../video/components/small-video-container/SmallVideoContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addToBookmark, getUserBookmarks} from "../../../../services/actions/video";

const Lesezeichen = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserBookmarks())
    },[])

    const {favorites} = useSelector(state=>state.video)
    const addToBookmarkHandler = e =>{
        dispatch(addToBookmark(e))
    }
    return(
        <div>
            <div className='videos__container__konto'>
                {favorites.length !== 0 ? favorites.map((e,i) => (
                    <SmallVideoContainer key={i} video={e} addToBookmark={addToBookmarkHandler} changeVideo={"no"}/>
                )):<p>There is no videos in your bookmark</p>}
            </div>
        </div>
    )
}

export default Lesezeichen