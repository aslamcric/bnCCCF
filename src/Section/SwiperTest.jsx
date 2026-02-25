import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

export const SwiperTest = () => {
  return (
    <div className="swiperTest-container">
      {" "}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="swiperTest"
      >
        <SwiperSlide className="swiper-slideTest">
          <img src="/assets/img/inner-page/404.png" alt="404 Error" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slideTest">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};
