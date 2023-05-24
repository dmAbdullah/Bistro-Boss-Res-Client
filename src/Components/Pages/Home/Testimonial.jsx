import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Testimonial = () => {
    const [reviews, setReviews]= useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div>
            <section className="mt-10">
                <SectionTitle 
                subHeading='What Our Clients Say'
                heading='TESTIMONIALS'></SectionTitle>
            </section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-screen-xl">
        
        {
           reviews.map(review=><SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center px-14">
            <Rating className="my-5" style={{ maxWidth: 150 }} value={review.rating} readOnly />
            <div  data-aos="zoom-in" className="text-7xl">
            <FaQuoteLeft/>
            </div>
                <p>{review.details}</p>
                <h3 className="text-2xl font-bold text-yellow-500">{review.name}</h3>
            </div>
           </SwiperSlide>) 
        }
      </Swiper>
        </div>
    );
};

export default Testimonial;