import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, /* Navigation, Pagination */]);
const SwipeableCarousel = (product) =>{
    const { elem } = product;
    console.log("elem", elem);
    /* const swiperData = [
        {image:"/item.png",text:"clean product 1"},
        {image:"/item.png",text:"clean product 2"},
        {image:"/item.png",text:"clean product 3"},
        {image:"/item.png",text:"clean product 4"},
        {image:"/item.png",text:"clean product 5"},
        {image:"/item.png",text:"clean product 6"},
        {image:"/item.png",text:"clean product 7"},
        {image:"/item.png",text:"clean product 8"},
        {image:"/item.png",text:"clean product 9"},
        {image:"/item.png",text:"clean product 10"},
        {image:"/item.png",text:"clean product 11"},
    ] */
    return(
        <>  <Swiper
                spaceBetween={50}
                slidesPerView={4}
                navigation
                autoplay
                pagination={{ clickable: true }}
            >
                {elem?.images?.map((e,i)=>{
                    return (
                      <SwiperSlide key={i}>
                        <div className={"swiper-element-main"}>
                          <div className={"swiper-images-body"}>
                            <img src={e.url} alt={elem.name} />
                          </div>
                          <p>{elem.name}</p>
                        </div>
                      </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    )
}

export default SwipeableCarousel