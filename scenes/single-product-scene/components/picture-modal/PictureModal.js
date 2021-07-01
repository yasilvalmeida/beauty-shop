import { Modal} from 'antd';
import { Carousel } from 'antd';
import {useRef} from "react";

const PictureModal = ({ setIsmodalVisible, isModalVisible, dataImages }) => {
    const handleOk = () => {
        setIsmodalVisible(false);
    };

    const handleCancel = () => {
        setIsmodalVisible(false);
    };
    const props = {
        dots: true,
        infinite: true,
        speed: 100,
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
        <Modal
            className={"antd-dpab-modal"}
            title=""
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1200}
            footer={null}
            centered
        >
            <Carousel  effect={"fade"} {...props} ref={carousel}>
                {dataImages?.map((e,i)=>{
                    return(
                        <div key={i} className={"single-product-carousel-popup"}>
                            <img src={e?.url} alt=""/>
                        </div>
                    )
                })}
            </Carousel>
            <button className={"centered__artikel__carousel__leftbtn"} onClick={previous}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     className="pu cd dr pv pw px kn">
                    <g fill="none" fillRule="evenodd">
                        <path d="M24 24H0V0h24z"></path>
                        <path fill="currentColor" fillRule="nonzero"
                              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"></path>
                    </g>
                </svg>
            </button>
            <button className={"centered__artikel__carousel__rightbtn"} onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     className="pu n dr pv pw px kn">
                    <g fill="none" fillRule="evenodd">
                        <path d="M24 24H0V0h24z"></path>
                        <path fill="currentColor" fillRule="nonzero"
                              d="M16.146 23.354L4.793 12 16.146.646l.708.708L6.207 12l10.647 10.646z"></path>
                    </g>
                </svg>
            </button>
        </Modal>
    )
}

export default PictureModal