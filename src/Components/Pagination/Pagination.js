import React, { useEffect, useState } from "react";
import { CiCircleMore } from "react-icons/ci";


function Pagination() {
  const [foods, setFoods] = useState([]);
  const [number, setNumber] = useState(3);
  function addMore() {
    setNumber((prev) => prev + 3);
  }
  useEffect(() => {
    const api = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
    fetch(api)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  });

  return (
    <div className="Container  overflow-auto h-[100vh] py-[20px] bg-[#e9e6e5] flex items-center flex-col w-[100%]">
      <div className="bg-[#b1b5c8] rounded-[8px] w-[80%] mb-[10px] top">
        <h1>Pagination</h1>
        <img src="" alt="" />
      </div>
      <div className="main  w-[80%] flex justify-center  py-[20px] bg-[#b1b5c8] rounded-[8px] gap-[20px]">
        <div className="w-[80%] flex flex-wrap justify-center gap-[20px]">
        {foods.slice(0, number).map((food) => (
          <div className="w-[300px]  rounded-[8px] flex flex-col gap-[10px]  bg-[#bfd5e2] ">
            <img className="w-[100%]  rounded-[8px]" src={food.strMealThumb} alt="" />
            <p className="  text-center">{food.strMeal}</p>
          </div>
        ))}
        </div>
      </div>
      <button
        onClick={addMore}
        className="flex justify-center items-center w-[120px] gap-[5px] bg-[#034078] text-white  text-[25px]  mt-[20px] rounded-[8px]"
      >More <CiCircleMore />
      </button>
    </div>
  );
}

export default Pagination;
