import { Carousel } from 'antd';
import FirstElement from "./components/first/FirstElement";
import {useRef} from "react"
import CenteredElement from "./components/centered/CenteredElement";
import RightSided from "./components/right-sided/RightSided";
import LeftSided from "./components/left-sided/LeftSided";
const CarouselArtikel = () =>{
    const props = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const next = () => {
        carousel.current.next();
    }
    const previous = () => {
        carousel.current.prev();
    }
const carousel = useRef()
    return(
        <Carousel  effect={"fade"} {...props} ref={carousel}>
            <div>
                <FirstElement next={next} previous={previous}/>
            </div>
            <div>
                <CenteredElement next={next} previous={previous}/>
            </div>
            <div>
                <RightSided next={next} previous={previous}/>
            </div>
            <div>
                <LeftSided next={next} previous={previous}/>
            </div>
        </Carousel>
    )
}

export default CarouselArtikel