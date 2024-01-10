import React, { useState } from "react";

function RandomProject() {
    const [minVal,setMinVal]=useState(0);
    const [maxVal,setMaxVal]=useState(0);
    const [randomVal,setRandomVal]=useState(0);
 
  function getRandom(){
      setRandomVal(Math.floor(Math.random()*(maxVal-minVal -1) + minVal +1))
  }


  return (
    <div className="Container w-[100%] h-[100vh] flex justify-center items-center bg-[#DED0B6]">
      <div className="main w-[30%] flex flex-col justify-center items-center  h-[500px] bg-[#607274] rounded-[10px] ">
        <div className="mainDiv flex h-[450px] w-[80%] flex-col justify-evenly ">
          <div className="randomDiv bg-[#FAEED1] px-[5px] py-[10px] font-bold text-[20px]">
            <p>Random Value: {randomVal}</p>
          </div>
          <div className="minMaxDiv flex justify-between w-[100%] ">
            <div className="minDiv flex flex-col gap-[5px] h-[60px] w-[45%] font-bold text-[18px]">
              <p>Minimum Value: {minVal}</p>
              <input value={minVal} onChange={e=>setMinVal(Number(e.target.value))} type="number" className="px-[5px] bg-[#FAEED1] h-[30px] w-[100%]" />
            </div>
            <div className="maxDiv flex flex-col gap-[5px] h-[60px] w-[45%] font-bold text-[18px]">
              <p>Maximum Value: {maxVal}</p>
              <input value={maxVal} onChange={e=>setMaxVal(Number(e.target.value))} type="number" className="px-[5px] bg-[#FAEED1] h-[30px] w-[100%]" />
            </div>
          </div>
          <button onClick={getRandom} className="bg-[#FAEED1] py-[13px] font-bold text-[20px]">Get Random Number.</button>

        </div>
      </div>
    </div>
  );
}

export default RandomProject;
