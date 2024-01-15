import React, { useState } from "react";
import axios from "axios";

function RandomQuote() {
  const [quoteDatas, setQuoteData] = useState([{}]);
  const [randomNumber, setRandomNumber] = useState();

  async function quoteData() {
    try {
      const response = await axios.get("QuoteData.json");
      setQuoteData(response.data);
    } catch (error) {
      console.error( error);
    }
    console.log(quoteDatas);

  }
  function btn() {
  setRandomNumber(Math.floor(Math.random()*5));
    quoteData();
  }

  return (
    <div className="w-[100%] flex justify-center items-center bg-[#e9e6e5]">
      <div className="main flex flex-col justify-evenly items-center w-[60%] rounded-[8px] h-[500px] bg-[#b5c99a]">
        <div className="allMain  w-[80%] h-[70%] flex flex-col  items-center">
          <div className=" quote  w-[85%]  flex justify-end mt-[40px] mb-[10px] ">
            <p className="p-quote text-[25px] w-[100%] text-center italic">
              {[quoteDatas[randomNumber].quote]}
            </p>
          </div>
          <div className="Author  w-[83%] flex justify-end">
            <p className="p-uthor font-bold text-[18px] text-end">
            {[quoteDatas[randomNumber].author]}
            </p>
          </div>
          <button
            onClick={btn}
            className="bg-[#184e77] mt-[120px] text-white py-[10px] rounded-[8px] text-[20px] px-[40px]"
          >
            Get Random Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
