import React from "react";
import Footer from "./Footer";

export function Download() {
  return (
    <div className="bg-black">
      <div className="text-white md:flex justify-center items-center flex-col">
        <h2 className="xs:mt-[40px] xs:ml-[10px] xs:font-bold">
          Smart Downloads
        </h2>
        <h1 className="xs:mt-[30px] xs:text-lg xs:ml-[10px] xs:font-bold">
          Introducing Downloads For You
        </h1>
        <p className="xs:mt-[10px]  xs:ml-[10px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui
          <br />, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan
          accumsan
          <br /> quis. Massa, id ut ipsum aliquam enim non posuere pulvinar
          diam.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col xs:mt-7 ">
        <div className=" rounded-full w-[290px] h-[290px] bg-gray-700"></div>
        <button className="bg-blue-700 w-[290px] mt-[10px]">SETUP</button>
        <button className="bg-gray-500 mt-[10px] mb-20">
          Find Something to Download
        </button>
      </div>
      <Footer />
    </div>
  );
}
