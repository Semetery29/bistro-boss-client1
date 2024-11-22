import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import cat1 from "../../../assets/home/slide1.jpg";
import cat2 from "../../../assets/home/slide2.jpg";
import cat3 from "../../../assets/home/slide3.jpg";
import cat4 from "../../../assets/home/slide4.jpg";
import cat5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={cat1} />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={cat2} />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={cat3} />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={cat4} />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Desserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={cat5} />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">
          Salad
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
