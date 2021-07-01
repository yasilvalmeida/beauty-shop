import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";

import moment from "moment";

SwiperCore.use([Navigation, Pagination]);


const MobileSwipeableCarousel = ({imagesData, elem}) => {
    // console.log("elem",elem);
    // console.log(elem.New_Date_Limit > moment(new Date()).format("YYYY-MM-DD"))
    const {singleProductVariantId} = useSelector(
        (state) => state.singleProdPage
    );
    let defaultVariant = [];
    if (elem.variants_of_a_products.length === 1) {
        defaultVariant = elem.variants_of_a_products;
    } else {
        defaultVariant = elem.variants_of_a_products.filter((item) => {
            return item.main === true;
        });
    }

    let [productVariant, setProductVariant] = useState(defaultVariant);

    useEffect(() => {
        if (singleProductVariantId !== "") {
            setProductVariant(
                elem.variants_of_a_products.filter((item) => {
                    return item.id === singleProductVariantId;
                })
            );
        }
    }, [singleProductVariantId]);

    let images = productVariant[0]?.images.length === 0 ? elem?.images : productVariant[0]?.images;


    return (
        <>
            <div className={"swiper-mobile"}>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    // navigation
                    pagination={{clickable: true}}
                >
                    {images?.map((e, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className={"swiper-element-main"}>
                                    <p className={"new-swiper-el"}

                                       style={elem?.New_Date_Limit <
                                       moment(new Date()).format("YYYY-MM-DD") ?
                                           {backgroundColor: "transparent"} :
                                           {backgroundColor: "black"}}
                                    >
                                        New
                                    </p>
                                    <p style={
                                        elem?.clean_product ?
                                            {opacity: "1"}
                                            : {opacity: "0"}
                                    }
                                    >
                                        Clean Product
                                    </p>
                                    <p className={"swiper-limited"}
                                       style={
                                           elem?.limited_edition ?
                                               {opacity: "1"}
                                               : {opacity: "0"}
                                       }
                                    >Limited Edition</p>
                                    <div className={"swiper-images-body"}>
                                        <img src={`${e?.url}`} alt=""/>
                                        {e?.approved_by_DPAB && <img
                                            src="/15-layers.png"
                                            alt="15 layers"
                                            className={"circled-txt"}
                                            onClick={() => router.push("/aboutthree")}
                                        />}
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default MobileSwipeableCarousel