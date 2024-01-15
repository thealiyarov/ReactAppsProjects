import React, { useState } from "react";
import axios from "axios";

function RandomQuote() {
  const [quoteDatas, setQuoteData] = useState([{}]);
  const [randomNumber, setRandomNumber] = useState(0);
  async function quoteData() {
    try {
      const response1 = await axios.get("QuoteData.json");
      setQuoteData(response1.data);
    } catch (error) {
      console.log(error);
    }
  }
  quoteData();

  function btn() {
    setRandomNumber(Math.floor(Math.random() * quoteDatas.length));
    console.log(quoteDatas);
  }

  return (
    <div className="w-[100%] flex justify-center items-center bg-[#e9e6e5]">
      <div className="main flex flex-col justify-evenly items-center w-[60%] rounded-[8px] h-[500px] bg-[#b5c99a]">
        <div className="allMain  w-[80%] h-[70%] flex flex-col justify-between items-center">
         <div className="w-[85%]">
         <div className=" quote  w-[100%]  flex justify-end mt-[40px]  ">
            <p className="p-quote text-[25px] w-[100%] text-end italic">
              {randomNumber==0? [quoteDatas[0].quote] : [quoteDatas[randomNumber].quote]}
            </p>
          </div>
          <div className="Author  w-[100%] flex justify-end">
            <p className="p-uthor font-bold text-[18px] text-end">
            {randomNumber==0? [quoteDatas[0].author] : [quoteDatas[randomNumber].author]}
            </p>
          </div>
         </div>
          <button
            onClick={btn}
            className="bg-[#184e77]  text-white py-[10px] rounded-[8px] text-[20px] px-[40px]"
          >
            Get Random Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
