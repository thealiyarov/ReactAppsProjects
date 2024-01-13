import React, { useState } from "react";

function RandomProject() {
    const [minVal,setMinVal]=useState();
    const [maxVal,setMaxVal]=useState();
    const [randomVal,setRandomVal]=useState();
 
  function getRandom(){
      setRandomVal(Math.floor(Math.random()*(maxVal-minVal -1) + minVal +1))
  }
  
  return (
    <div className="Container w-[100%] h-[100vh] flex flex-col justify-center items-center bg-[#e9e6e5]">
      <h1 className="  mb-[60px] bg-[#607274]   text-center rounded-[5px] w-[40%]">Random Number Generator</h1>
      <div className="main w-[40%] flex flex-col justify-center items-center  h-[500px] bg-[#607274] rounded-[10px] ">
        <div className="mainDiv flex h-[450px] w-[80%] flex-col justify-evenly ">
          <div className="randomDiv bg-[#FAEED1] px-[5px] py-[5px] font-bold text-[20px]">
            <p>Random Value: <span className="text-[25px] font-bold">{randomVal}</span> </p>
          </div>
          <div className="minMaxDiv flex justify-between w-[100%] ">
            <div className="minDiv flex flex-col gap-[5px] h-[60px] w-[45%] font-bold text-[20px]">
              <p>Minimum Value</p>
              <input value={minVal} onChange={e=>setMinVal(Number(e.target.value))} type="number" className="px-[5px] py-[5px] bg-[#FAEED1] w-[100%]" />
            </div>
            <div className="maxDiv flex flex-col gap-[5px] h-[60px] w-[45%] font-bold text-[20px]">
              <p>Maximum Value</p>
              <input value={maxVal} onChange={e=>setMaxVal(Number(e.target.value))} type="number" className="px-[5px] py-[5px] bg-[#FAEED1] w-[100%]" />
            </div>
          </div>
          <button onClick={getRandom} className="bg-[#FAEED1] py-[13px] font-bold text-[25px] hover:bg-[#DED0B6]">Get Random Number</button>
        </div>
      </div>
    </div>
  );
}

export default RandomProject;
