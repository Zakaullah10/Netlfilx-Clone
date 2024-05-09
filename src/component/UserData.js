import React, { useState } from "react";
import { NetflixLogo } from "./asset";
import { MdModeEditOutline } from "react-icons/md";
import { Udata } from "../constants";
import { IoAddCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export function UserData() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (field1 === "" || field2 === "") {
      setError("Please fill in all fields");
    } else {
      const email = [
        {
          Email: field1,
          password: field2,
        },
      ];

      console.log(email);
      navigate(`/home`);
    }
  };

  return (
    <>
      <div className="bg-black h-[]">
        <div className="flex">
          <div className="flex md:justify-end xs:justify-center md:h-[200px] xs:h-[50px] md:items-start xs:items-center w-[63%] p-10">
            <img src={NetflixLogo} />
          </div>
          <div className=" flex justify-center md:items-start xs:items-center h-[1px]  md:mt-16 xs:mt-[2.5rem] text-white  xxs:text-4xl  sm:text-4xl w-[37%] md:text-5xl">
            <MdModeEditOutline onClick={() => setShowModal(true)} />
          </div>
        </div>
        <div className="grid  md:grid-cols-4 xs:grid-cols-2 ">
          {Udata?.map((i) => (
            <div key={i.id}>
              <div className="flex justify-center items-center xs:h-[100px] xs:mt-[20px]  md:h-[300px]">
                <img
                  className=" md:w-[200px] xs:w-[110px]"
                  src={i.image}
                  alt={i.Text}
                  onClick={() => setShowModal(true)}
                />
              </div>
              <div className="text-white md:text-4xl xs:text-xl flex justify-center items-center ">
                <h1
                  className=" hover:cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  {i.Text}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="md:mt-8 xs:mt-5">
          <div className="text-3xl text-white md:ml-20 xs:ml-[1.5rem] w-[140px]">
            {" "}
            <IoAddCircleSharp
              className=" md:h-[200px] xs:h-[80px] md:w-[150px] xs:w-[100px] "
              onClick={() => setShowModal(true)}
            />
            <p1
              className="text-lg  md:ml-[30px] xs:ml-[10px]  hover:cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Add Profile
            </p1>
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-red-600">
                    Netflix Form
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex flex-col gap-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-[40px]"
                    value={field1}
                    onChange={(e) => setField1(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-[40px]"
                    value={field2}
                    onChange={(e) => setField2(e.target.value)}
                    required
                  />
                  <p style={{ color: "red" }}>{error}</p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 bg-slate-300 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
