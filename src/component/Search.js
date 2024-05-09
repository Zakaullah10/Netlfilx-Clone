import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Hdata } from "../constants";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


export function Search() {
  const navigate =useNavigate()
  const [filterInput, setFilterInput] = useState('');

  // Function to handle filter input change
  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };

  // Function to filter data based on filterInput
  const filteredData = Hdata.filter((item) =>
    item.name.toLowerCase().includes(filterInput.toLowerCase())
  );
 
  return (
    <div className="bg-black">
      <form class="flex items-center max-w-lg mx-auto mt-5">
        <label for="voice-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute text-white inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-400 text-white  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design..."
            required
            value={filterInput}
        onChange={handleFilterChange}
          />
          <button
            type="button"
            class="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="mt-4 ml-4 mb-4">
        <p1 className=" text-white xs:text-xl md:text-3xl">Top Search</p1>
      </div>
      <div className="pb-20 hover:cursor-pointer"  >
      {filteredData ?.map((data)=>(    
         <div className="w-full xs:h-[100px] md:h-[200px] flex  bg-gray-700 mt-4" onClick={()=>{navigate(`/video/${data.id}`)}}>
         <div className="w-[40%] h-full">
           <img className="w-full h-full" src={data.image}  />
         </div>
         <div className="w-[60%] h-[full] flex justify-between ml-3 mr-3 items-center">
           {" "}
           <h1 className=" xs:text-lg md:text-3xl text-white">{data.name}</h1>{" "}
           <FaRegCirclePlay
             className=" xs:text-lg md:text-3xl
         text-white"
           />
         </div>
       </div>  
      ))}
     </div>
     <Footer/>
    </div>
  );
}
