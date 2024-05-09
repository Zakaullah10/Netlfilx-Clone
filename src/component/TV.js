import React from "react";
import { Bg1,  logo } from "./asset";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Slider from "./SLider";
import { Footer } from "./Footer";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Hslider } from "./Hslider";
import { H1slider } from "./H1slider";
import { H2slider } from "./H2slider";
import { H3slider } from "./H3slider";
import { H4slider } from "./H4slider";
import { H5slider } from "./H5slider";
import { H6slider } from "./H6slider";
import { H7slider } from "./H7slider";
import { H8slider } from "./H8.slider";
import { H9slider } from "./H9slider";
import { H10slider } from "./H10slider";
import { H11slider } from "./H11slider";
import { IoMdArrowDropdown } from "react-icons/io";

export function TV() {
  return (
    <div className="bg-black ">
      <div
        className="w-[100%] h-[550px]"
        style={{
          backgroundImage: `url(${Bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover  ",
          objectPosition: "100%",
        }}
      >
        <div className="w-[100%] flex xs:gap-25px] md:gap-[50px] items-center text-[2vw] text-white">
          <div className=" flex justify-center items-center h-[100%]">
            <img
              src={logo}
              className="md:h-[130px] sm: h-[100px] xs:h-[80px]"
            />
          </div>
          <NavLink className="xs:text-[12px] md:text-[20px] flex justify-center items-center" to="/tv">
            TV SHOW
            <IoMdArrowDropdown className="xs:text-2xl md:text-3xl"/>
          </NavLink>
          <NavLink className="xs:text-[12px] md:text-[20px]  flex justify-center items-center" to="/home">
          All Genres
          <IoMdArrowDropdown className="xs:text-2xl md:text-3xl"/>
          </NavLink>
        </div>
      </div>
      <div className="w-full h-full  bg-black">
        <div className="w-[100%] h-[150px] ">
          <div className="w-[100%] h-[25%]  flex justify-center items-center gap-[15px]">
            <div
              className="w-[25px] h-[25px]   border-2 border-white  flex justify-center items-center flex-col
          font-bold "
            >
              <p className="text-white text-[5px] pt-[3px]">TOP</p>{" "}
              <p className="text-white text-[8px]">1O</p>{" "}
            </div>
            <h1 className="text-white font-bold">#2 in Nigeria Today</h1>
          </div>
          <div className="w-[100%]  flex justify-center items-center md:gap-16 xs:gap-8">
            <div className="flex justify-center items-center flex-col  text-white">
              {" "}
              <IoMdAdd className="text-[40px]" />{" "}
              <h1 className="font-bold">My List</h1>{" "}
            </div>
            <div>
              {" "}
              <button className="bg-gray-400 flex justify-center items-center gap-[15px]  md:w-[150px] xs:w-[110px] md:h-[60px] xs:h-[50px] rounded-lg ">
                <FaPlay className="text-[30px]" />{" "}
                <h1 className="text-[20px] font-bold"> Play</h1>
              </button>{" "}
            </div>
            <div className="flex justify-center items-center flex-col  text-white">
              {" "}
              <IoInformationCircleOutline className="text-[40px]" />{" "}
              <h1 className="font-bold">Info</h1>{" "}
            </div>
          </div>
        </div>
        <div className="w-full md:h-[300px] xs:h-[200px] ">
          <div className="w-full h-1/4 flex items-center ">
            {" "}
            <h1 className="md:text-5xl sm:text-3xl xs:text-2xl font-bold ml-4 text-white ">
              Previews
            </h1>{" "}
          </div>
          <div className=" ml-6">
            <Slider />{" "}
          </div>
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                Continue Watching for Emenalo
              </h1>{" "}
            </div>
          </div>
          <Hslider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                Popular on Netflix
              </h1>{" "}
            </div>
          </div>
          <H1slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                Trending Now
              </h1>{" "}
            </div>
          </div>
          <H2slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                Top 10 in Nigeria Today
              </h1>{" "}
            </div>
          </div>
          <H3slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                My List
              </h1>{" "}
            </div>
          </div>
          <H4slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                African Movies
              </h1>{" "}
            </div>
          </div>
          <H5slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                Nollywood Movies & TV
              </h1>{" "}
            </div>
          </div>
          <H6slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                Netflix Originals
              </h1>{" "}
            </div>
          </div>
          <H7slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[40px] ">
                Watch It Again
              </h1>{" "}
            </div>
          </div>
          <H8slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                New Releases
              </h1>{" "}
            </div>
          </div>
          <H9slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                TV Thrillers & Mysteries
              </h1>{" "}
            </div>
          </div>
          <H10slider />
          <div className=" bg-black">
            <div className=" w-full flex justify-start items-center ">
              {" "}
              <h1 className="text-white font-bold text-lg ml-4 mt-[20px] ">
                US TV Shows
              </h1>{" "}
            </div>
          </div>
          <H11slider />
        </div>
      </div>
     <Footer/>
    </div>
  );
}
