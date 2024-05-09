import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import {Hs1, Hs2, Hs3, Hs4, Hs5,  } from './asset';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';

export  function H9slider() {
  return (
    <div className='bg-black'>
      <Swiper 
        breakpoints={{
            320 :{
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
      >
      
      <SwiperSlide className="ml-6 ">
          <div className="xs:h-[200px] md:h-[470px] bg-black">
            <div className="w-full h-[80%] ">
              <img className="w-full h-full" src={Hs1} />
            </div>
            <div className="h-[20%] flex justify-around items-center ">
              <IoInformationCircleOutline className="text-white" />{" "}
              <BsThreeDotsVertical className="text-white" />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="xs:h-[200px] md:h-[470px] bg-black">
            <div className="w-full h-[80%] ">
              <img className="w-full h-full" src={Hs2} />
            </div>
            <div className="h-[20%] flex justify-around items-center ">
              <IoInformationCircleOutline className="text-white" />{" "}
              <BsThreeDotsVertical className="text-white" />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="xs:h-[200px] md:h-[470px] bg-black">
            <div className="w-full h-[80%] ">
              <img className="w-full h-full" src={Hs3} />
            </div>
            <div className="h-[20%] flex justify-around items-center ">
              <IoInformationCircleOutline className="text-white" />{" "}
              <BsThreeDotsVertical className="text-white" />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="xs:h-[200px] md:h-[470px] bg-black">
            <div className="w-full h-[80%] ">
              <img className="w-full h-full" src={Hs4} />
            </div>
            <div className="h-[20%] flex justify-around items-center ">
              <IoInformationCircleOutline className="text-white" />{" "}
              <BsThreeDotsVertical className="text-white" />{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="xs:h-[200px] md:h-[470px] bg-black">
            <div className="w-full h-[80%] ">
              <img className="w-full h-full" src={Hs5} />
            </div>
            <div className="h-[20%] flex justify-around items-center ">
              <IoInformationCircleOutline className="text-white" />{" "}
              <BsThreeDotsVertical   className="text-white" />{" "}
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}