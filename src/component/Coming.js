import React from "react";
import { MdCircleNotifications } from "react-icons/md";
import { C1, C2, C3 } from "./asset";
import { MdNotifications } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { Cdata } from "../constants/Cdata";
import Footer from "./Footer";
export function Coming() {
  return (
    <div className="bg-black">
      <div className="flex items-center ml-4 mt-4 gap-1">
        <MdCircleNotifications className="text-red-600 text-xl"  />{" "}
        <h1 className="text-white">Notifications</h1>
      </div>
      <div className="w-full h-[130px] bg-slate-600">
        <div className="w-full h-[50%] flex ">
          <div className="w-[40%] h-full flex justify-center items-center">
            {" "}
            <img src={C1} />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center ">
            <h1 className="text-white">New Arrival</h1>
            <h1 className="text-white">El Chapo</h1>
            <h1 className="text-gray-500">Nov 6</h1>
          </div>
        </div>
        <div className="w-full h-[50%] flex ">
          <div className="w-[40%] h-full flex justify-center items-center">
            {" "}
            <img src={C2} />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center ">
            <h1 className="text-white">New Arrival</h1>
            <h1 className="text-white">Peaky Blinders</h1>
            <h1 className="text-gray-500">Nov 6</h1>
          </div>
        </div>
      </div>
      <div className="pb-20">
      {Cdata?.map((item)=>(<div className="w-full h-[390px] mt-4 mb-6">
        <div className="w-full h-[45%]">
          <img src={item.image} />
        </div>
        <div className="flex justify-end mr-[40px] gap-10 ">
          <div className=" flex flex-col items-center">
            {" "}
            <MdNotifications className="text-white text-4xl " />{" "}
            <h1 className="text-white "> Remind Me</h1>
          </div>
          <div className=" flex flex-col items-center">
            {" "}
            <IoShareSocialSharp className="text-white text-4xl" />{" "}
            <h1 className="text-white">Share</h1>
          </div>
        </div>
        <div>
          <h1 className="text-white ml-2">Season 1 Coming December 14</h1>
          <h1 className="text-white text-2xl ml-2">Castle & Castle</h1>
          <h1 className="text-white ml-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan
            accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar
            diam.
          </h1>
          <div className="flex text-[10px] gap-1 ml-2  ">
                <li  className="text-white list-none ">Steamy</li>
                <li  className="text-white">Soapy</li>
                <li  className="text-white">Slow Burn</li>
                <li  className="text-white">Suspenseful</li>
                <li  className="text-white">Teen</li>
                <li  className="text-white">Mystery</li>
          </div>
        </div>
      </div>))}
      </div>
      <Footer/>
    </div>
  );
}
