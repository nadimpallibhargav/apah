import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import testimonialOne from '../../../assets/images/testimonialOne.jpeg'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <h2>A drink can make difference</h2>
            <div className="testimonialContent">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        1: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        600: {
                          spaceBetween: 10,
                          slidesPerView: 2,
                          slidesPerGroup: 1,
                        },
          
                        1024: {
                          spaceBetween: 10,
                          slidesPerView: 3,
                          slidesPerGroup: 1,
                        }
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="testimonialCard">
                            <div className="imageWrapper">
                                <img src={testimonialOne} alt="customer reviews" />
                            </div>
                            <h3>Rohit Raju</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab incidunt obcaecati voluptas eaque nisi illo.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialCard">
                            <div className="imageWrapper">
                                <img src={testimonialOne} alt="customer reviews" />
                            </div>
                            <h3>Rohit Raju</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab incidunt obcaecati voluptas eaque nisi illo.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialCard">
                            <div className="imageWrapper">
                                <img src={testimonialOne} alt="customer reviews" />
                            </div>
                            <h3>Rohit Raju</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab incidunt obcaecati voluptas eaque nisi illo.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialCard">
                            <div className="imageWrapper">
                                <img src={testimonialOne} alt="customer reviews" />
                            </div>
                            <h3>Rohit Raju</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab incidunt obcaecati voluptas eaque nisi illo.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialCard">
                            <div className="imageWrapper">
                                <img src={testimonialOne} alt="customer reviews" />
                            </div>
                            <h3>Tharun Kumar</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab incidunt obcaecati voluptas eaque nisi illo.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonialCard">
                            <div className="imageWrapper">
                                <img src={testimonialOne} alt="customer reviews" />
                            </div>
                            <h3>Deeraj Varma</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab incidunt obcaecati voluptas eaque nisi illo.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>      
    </section>
  )
}

export default Testimonial