import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { S1, logo } from './asset'
import { Mdata } from '../constants'
import Footer from './Footer'

export default function Mylist() {
  return (
    <div className='bg-black'>
        <div className="w-[100%] flex xs:gap-25px] md:gap-[50px] items-center text-[2vw] text-white">
          <div className=" flex justify-center items-center h-[100%]">
            <img
              src={logo}
              className="md:h-[130px] sm: h-[100px] xs:h-[80px]"
            />
          </div>
          <NavLink  className="xs:text-[12px] md:text-[20px] flex justify-center items-center" to="/movie">
            MOVIES
            <IoMdArrowDropdown className="xs:text-2xl md:text-3xl"/>
          </NavLink>
        </div>
        <div className='grid xs:grid-cols-3 md:grid-cols-4  pb-20 '>
          {Mdata?.map((items)=>(<div className='mt-3 flex justify-center'><img className='xs:w-[100px] md:w-[320px] md:h-[250px] xs:h-[100px]' src={items.image}/></div>))}
            
        </div>
        <Footer />
    </div>
  )
}
