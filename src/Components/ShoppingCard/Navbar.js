import React, { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Card from "./Card";
import { Link, Outlet } from "react-router-dom";

function Navbar({ books }) {
  const [miqdari,setMiqdari]=useState()

  useEffect(()=>{
    let say = 0;
    books.forEach((element) => {
      say += element.amount;
      setMiqdari(say)
      console.log("sayi" + miqdari)
    })
  })
  return (
    <div>
      <div className="mainNav w-[100%] h-[50px] ">
        <div className="leftRight flex h-[50px] items-center justify-between px-[20px]">
          <div className="navLeft cursor-pointer ">
            <Link to="/shoppingcard">
              <h1>Shopping App</h1>
            </Link>
          </div>
          <div className="navRight">
            <div className="icon w-[70px]  ">
              <Link
                className="flex   h-[50px] gap-[7px] w-[100%] relative justify-center cursor-pointer items-center"
                to="/shoppingcard/card"
              >
                <FiShoppingBag className="text-[25px] " />
                
                    <div className="w-[20px] h-[20px] bg-[#023e8a]  text-white flex justify-center items-center rounded-[50%] absolute top-[6px] right-[5px]">
                      <p className="text-[12px]">{miqdari}</p>
                    </div>
               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
