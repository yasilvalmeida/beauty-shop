import ComponentHeader from '../../shareable/component-header/ComponentHeader';
import MediatekInfo from './components/mediatek-info/MediatekInfo';
import VideoPart from '../homepage/components/video/VideoPart'
import VideosContainer from './components/video-container/VideosContainer'
import Social from '../../shareable/social/Social';
import NewsletterRep from "../../shareable/newsLetter/NewsletterRep";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUserDataFromLocalStorage} from "../../services/actions/auth";
import {filterVideos, getVideos, getVideoText} from "../../services/actions/video";

const Video = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDataFromLocalStorage());
        dispatch(getVideoText())
        dispatch(getVideos())
    }, []);

    const {videoText} = useSelector(state => state.video)
    const {videos} = useSelector(state => state.video)
    const {videosLoaded} = useSelector(state => state.video)

    const [activeIndex, setActiveIndex] = useState()

    useEffect(() => {
        setActiveIndex(videos[0]?.id)
    }, [videosLoaded])

    const info = videos.map(e => {
        return e.type.toUpperCase()
    })

    const [infoFilter, setInfoFilter] = useState({type: "", checked: false})

    useEffect(() => {
        let a = []
        videos.map(e => {
            if (e.type.toUpperCase() === infoFilter.type) {
                a.push(e)
            }
        })
        if (infoFilter.type !== "" && infoFilter.checked) {
            dispatch(filterVideos(a))
        } else dispatch(filterVideos([]))
    }, [infoFilter])

    const {filtered} = useSelector(state => state.video)

    useEffect(() => {
        if (filtered.length !== 0) {
            setActiveIndex(filtered[0]?.id)
        }
    }, [filtered])

    return (
        <div>
            <ComponentHeader
                info={videoText?.header}
                title={videoText?.title}
            />
            <MediatekInfo info={info} setInfo={setInfoFilter} checked={infoFilter.checked} filter={infoFilter}/>
            <VideoPart text={videoText?.video_text}
                       video={filtered.length !== 0 ?
                           filtered.find(item => item.id === activeIndex) :
                           videos.find(item => item.id === activeIndex)}/>
            <VideosContainer videos={filtered.length !== 0 ? filtered : videos} activeIndex={activeIndex}
                             setActiveIndex={setActiveIndex}/>
            <Social/>
            <NewsletterRep/>
        </div>
    );
};

export default Video;
