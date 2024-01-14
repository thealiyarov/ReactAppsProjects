import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineNumber } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiNotebook } from "react-icons/pi";

import "./Menu.css"
function Menu() {
    const [searchVal,setSearchVal]=useState("")

    const links=[
        {to:"/randomnumbergenerator", name:'Random Number Generator',icon:<AiOutlineNumber />},
        {to:"/galleryapp", name:'Gallery App',icon:<RiGalleryLine />},
        {to:"/todolistapp", name:'To Do List App' , icon:<PiNotebook />
      },
    ]

    function searchFn(e){
        setSearchVal(e.target.value);
    }

  return (
    <div className="Container relative text-white  bg-[#392467] h-[100vh] w-[25%] py-[20px] px-[30px] ">
      <div className="top flex w-[110%]  mx-[-15px] gap-[10px]">
      <div className="search w-[100%] flex ">
        <form  className="w-[100%]  h-[30px] bg-[#EEF5FF] flex items-center relative rounded-[8px] " action="input">
        <input id="input" value={searchVal} placeholder="Search" onChange={searchFn} className=" w-[100%] border-none outline-none px-[5px] text-black h-[30px] bg-[#EEF5FF] rounded-[8px]" type="text"/>
        <p className="absolute right-[5px] h-[100%] w-[8%]  text-[black]">{<IoSearchOutline className="h-[100%] text-[#84888e] w-[100%] " />}</p>
        </form>
      </div>
      <div className="w-[10%] flex items-center h-[30px]">
            <NavLink to="/home" ><BiHomeAlt2 className="w-[100%] h-[30px]" /></NavLink>
      </div>
      </div>
      <div className="links flex flex-col mt-[30px]">
        <ul className="flex flex-col gap-[15px] ">
            {   
                links.filter((link)=>link.name.toLowerCase().includes(searchVal.trim())).map((link)=>{
                    return (
                        <li>
                             <NavLink className="flex gap-[5px] items-center" to={link.to}>{link.icon}{link.name}</NavLink>
                          </li>
                    )

                })

            }

          
        </ul>
      </div>
      <Outlet/>
    </div>
  );
}

export default Menu;
