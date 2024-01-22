import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ColorGenerator() {
  const [color, setColor] = useState({color1:"#fffff",color2:"blue",color3:"green",color4:"pink",color5:"yellow"});

  useEffect(()=>{
    const random1= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random2= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random3= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random4= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random5= "#" + Math.floor(Math.random() * 16777721).toString(16)
    setColor({
        color1:random1,color2:random2,color3:random3,color4:random4,color5:random5,
    })
  },[])

  function generatorFn() {
    const random1= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random2= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random3= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random4= "#" + Math.floor(Math.random() * 16777721).toString(16)
    const random5= "#" + Math.floor(Math.random() * 16777721).toString(16)
    setColor({
        color1:random1,color2:random2,color3:random3,color4:random4,color5:random5,
    })
  }
  const notify1 = () => toast(color.color1 + " copied");
  const notify2 = () => toast(color.color2 + " copied");
  const notify3 = () => toast(color.color3 + " copied");
  const notify4 = () => toast(color.color4 + " copied");
  const notify5 = () => toast(color.color5 + " copied");
  return (
    <div className="Container relative flex  bg-[#e9e6e5] justify-center items-center w-[100%]">
        <div style={{backgroundColor:color.color1}} className=" text-[1.2rem] cursor-pointer h-[100vh]   w-[20%]"  onClick={()=>navigator.clipboard.writeText(color.color1)} ><div className="pt-[10px]   pl-[5px] w-[100%] h-[100%]" onClick={notify1}>
            {color.color1}</div></div>
        <div style={{backgroundColor:color.color2}} className=" text-[1.2rem] cursor-pointer h-[100vh]  w-[20%] " onClick={()=>navigator.clipboard.writeText(color.color2)} ><div  className="pt-[10px] pl-[5px] w-[100%] h-[100%]" onClick={notify2}>
            {color.color2}</div></div>
        <div style={{backgroundColor:color.color3}} className="text-[1.2rem] cursor-pointer h-[100vh]  w-[20%] " onClick={()=>navigator.clipboard.writeText(color.color3)} ><div className="pt-[10px] pl-[5px] w-[100%] h-[100%]" onClick={notify3}>
            {color.color3}</div></div>
        <div style={{backgroundColor:color.color4}} className="text-[1.2rem] cursor-pointer h-[100vh]  w-[20%] " onClick={()=>navigator.clipboard.writeText(color.color4)} ><div className=" pt-[10px] pl-[5px] w-[100%] h-[100%]" onClick={notify4}>
            {color.color4}</div></div>
        <div style={{backgroundColor:color.color5}} className="text-[1.2rem] cursor-pointer h-[100vh]  w-[20%] " onClick={()=>navigator.clipboard.writeText(color.color5)} ><div className=" pt-[10px] pl-[5px] w-[100%] h-[100%]" onClick={notify5}>
            {color.color5}</div></div>
        <div className="main absolute w-[40%] justify-around items-center bg-white  h-[30%] flex  rounded-[8px] ">
          <button onClick={generatorFn} className="border border-solid-[1px] border-[#392467]  px-[20px] py-[10px] rounded-[8px]">
            Color Generator
          </button>
       
      </div>
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
}

export default ColorGenerator;
