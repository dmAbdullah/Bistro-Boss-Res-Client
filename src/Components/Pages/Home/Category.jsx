import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide_1 from "../../../assets/home/slide1.jpg"
import slide_2 from "../../../assets/home/slide2.jpg"
import slide_3 from "../../../assets/home/slide3.jpg"
import slide_4 from "../../../assets/home/slide4.jpg"
import slide_5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../Shared/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle className="text-center"
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide><img src={slide_1} alt="" /><h3 className="text-xl font-bold text-center uppercase -mt-16 text-white">Salad</h3></SwiperSlide>
        <SwiperSlide><img src={slide_2} alt="" /><h3 className="text-xl font-bold text-center uppercase -mt-16 text-white">Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide_3} alt="" /><h3 className="text-xl font-bold text-center uppercase -mt-16 text-white">Soup</h3></SwiperSlide>
        <SwiperSlide><img src={slide_4} alt="" /><h3 className="text-xl font-bold text-center uppercase -mt-16 text-white">Ice Cream</h3></SwiperSlide>
        <SwiperSlide><img src={slide_5} alt="" /><h3 className="text-xl font-bold text-center uppercase -mt-16 text-white">Salad</h3></SwiperSlide>       
      </Swiper>
        </section>
    );  
};

export default Category;