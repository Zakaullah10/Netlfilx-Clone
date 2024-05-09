import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsCollectionPlay } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";

export function Footer() {
  const navigate=useNavigate()
  return (
    <footer className="footer">
      <div className="footer-item hover:cursor-pointer " onClick={()=>{navigate(`/home`)
      }}>
        <IoHome className="icon" />
        Home
      </div>
      <div className="footer-item hover:cursor-pointer"onClick={()=>{navigate(`/search`)
      }}>
        <FaSearch className="icon" />
       Search
      </div>
      <div className="footer-item  hover:cursor-pointer" onClick={()=>{navigate(`/coming`)
      }}>
        <BsCollectionPlay className="icon"  />
        Coming Soon
      </div>
      <div className="footer-item  hover:cursor-pointer" onClick={()=>{navigate(`/download`)
      }}>
        <FaDownload className="icon" />
        Download
      </div>
      <div className="footer-item  hover:cursor-pointer" onClick={()=>{navigate(`/more`)
      }}>
        <CgDetailsMore className="icon" />
       More
      </div>
    </footer>
  );
}

export default Footer;
