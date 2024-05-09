import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import {circle, circle1, circle2, circle3 } from './asset';

export default function Slider() {
  return (
    <>
      <Swiper
        breakpoints={{
            320:{
                slidesPerView: 3,
                spaceBetween: 20
            },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><img className='bg-black md:w-[100%] ' src={circle3}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle1}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle2}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle3}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle2}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle3}/></SwiperSlide>
        <SwiperSlide><img className='bg-black  md:w-[100%]' src={circle1}/></SwiperSlide>
      </Swiper>
    </>
  );
}
