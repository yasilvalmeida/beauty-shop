import { Carousel } from "antd";
import FirstElement from "./components/first/FirstElement";
import { useRef, useEffect } from "react";
import CenteredElement from "./components/centered/CenteredElement";
import RightSided from "./components/right-sided/RightSided";
import LeftSided from "./components/left-sided/LeftSided";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const CarouselArtikel = () => {
  const route = useRouter();
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  const props = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const next = () => {
    carousel.current.next();
  };
  const previous = () => {
    carousel.current.prev();
  };
  const carousel = useRef();
  useEffect(() => {
    const { id, gallery } = route.query;
    if (!id && !gallery) {
      route.back();
    }
  }, []);
  return (
    <Carousel effect={"fade"} {...props} ref={carousel}>
      <div>
        <FirstElement
          next={next}
          previous={previous}
          image={
            magazineSingleArticleData?.images?.length > 0
              ? magazineSingleArticleData?.images[0]
              : ""
          }
        />
      </div>
      <div>
        <CenteredElement
          next={next}
          previous={previous}
          image={
            magazineSingleArticleData?.images?.length > 1
              ? magazineSingleArticleData?.images[1]
              : ""
          }
        />
      </div>
      <div>
        <RightSided
          next={next}
          previous={previous}
          image={
            magazineSingleArticleData?.images?.length > 2
              ? magazineSingleArticleData?.images[2]
              : ""
          }
        />
      </div>
      <div>
        <LeftSided
          next={next}
          previous={previous}
          image={
            magazineSingleArticleData?.images?.length > 3
              ? magazineSingleArticleData?.images[3]
              : ""
          }
        />
      </div>
    </Carousel>
  );
};

export default CarouselArtikel;
