import React from "react";
import { Link } from "react-router-dom";
import { Udata } from "../constants";
import { IoMdAdd } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import Footer from "./Footer";

export function More() {
  return (
    <div className="bg-black ">
      <div className="flex  justify-around  mt-[20px]">
        {Udata?.map((i) => (
          <div>
            <div className="flex justify-center  items-center xs:h-[50px] xs:mt-[20px]  md:h-[300px]">
              <Link to="/home">
                <img
                  className=" md:w-[250px] xs:w-[50px] xs:h-[50px] md:h-[250px]"
                  src={i.image}
                />
              </Link>
            </div>
            <div className="text-white md:text-4xl xs:text-[12px] flex justify-center items-center ">
              <Link to="/home">
                {" "}
                <h1>{i.Text} </h1>{" "}
              </Link>
            </div>
          </div>
        ))}
        <IoMdAdd
          className=" md:w-[250px] md:h-[250px] xs:w-[50px] xs:h-[50px]  xs:mt-5 md:mt-11 text-gray-400  border-solid border-2 border-gray-500
         "
        />
      </div>
      <div className="text-white  flex justify-center items-center mt-7 gap-1">
        <MdModeEditOutline />
        <h1>Manage Profiles</h1>
      </div>
      <div className="w-full  bg-slate-700  ">
        <div className=" flex md:justify-center gap-1 text-xl text-white font-bold items-center ml-2   ">
          <RiMessage2Line className="mt-4" />{" "}
          <h1 className="mt-5">Tell friends about Netflix.</h1>
        </div>
        <div >
          <p className="text-white ml-2 flex md:justify-center">
            Lorem ipsum dolor sit amet,consectetur
            <br /> adipiscing elit.Sit quam dui, vivamus bibendum
          </p>
          <h1 className="mt-2 ml-2 text-white md:flex justify-center">Terms & Conditions</h1>
          <div className="flex justify-center"><div className="w-[100px] h-1 bg-gray-500 ml-4 md:flex justify-center"></div></div>
          
          <div className="flex gap-3 mt-3 ml-2 md:justify-center">
            {" "}
            <input type="text" className="w-[200px] bg-black" />{" "}
            <button className="bg-white font-bold w-[80px] h-[35px]">
              Copy Link
            </button>{" "}
          </div>
          <div className="flex justify-around mt-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
              ></path>
              <path
                fill="#fff"
                d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="h-[50px] w-1 bg-gray-500"> </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
            <div className="h-[50px] w-1 bg-gray-500 "> </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>
            </svg>
            <div className="h-[50px] w-1 bg-gray-500"> </div>
            <div className="fle justify-center items-center flex-col mr-[10px]">
              <IoIosMore className="w-[50px] h-[30px] text-white " />
              <h3 className=" text-white">MORE</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 ml-2 ">
        <TiTick className=" text-white w-[40px] h-[30px]" />
        <h1 className="text-white text-xl">My List</h1>
      </div>
      <div className="w-full h-1 bg-gray-500 "></div>
      <div className="ml-5 mt-3 pb-[60px] ">
        <h1 className="text-white text-lg">App Settings </h1>
        <h1 className="text-white text-lg">Account </h1>
        <h1 className="text-white text-lg">Help </h1>
        <h1 className="text-white text-lg " >Sign Out </h1>
      </div>
      <Footer/>
    </div>
  );
}
