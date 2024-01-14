import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";


function ToDoApp() {
  const [addItem, setAddItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  function AddFn(e) {
    if(!addItem){
        return alert("please write item")
    }
    e.preventDefault()
    const items = {
      id: Math.floor(Math.random() * 1000),
      name: addItem,
    };
    setNewItem((olditems) => [...olditems, items]);
    setAddItem("");
  }
  function deleteItem(id){
    const newitems = newitem.filter(item => item.id !==id);
    setNewItem(newitems);
}
  return (
    <div className="Container flex flex-col justify-center items-center bg-[#e9e6e5] w-[100%] ">
        <h1 className=" w-[50%] text-center mb-[30px] bg-[#5C5470]   rounded-[5px] ">To Do List App</h1>
      <div className="Main w-[50%] flex flex-col items-center   rounded-[8px]  h-[80vh]   bg-[#5C5470] ">
       
        <div className="Inputli  w-[80%]">
          <div className="itemUl flex flex-col gap-[25px]">
           <div className="formDiv w-[100%] flex justify-center  gap-[10px] mt-[30px]  ">
          
              <input
                className="px-[7px] rounded-[5px] w-[100%] "
                onChange={(e) => setAddItem(e.target.value)}
                value={addItem}
                type="text"
                placeholder="Write Here"
              />
              <button
                onClick={AddFn}
                className="Addbtn px-[15px] py-[2px] rounded-[8px] bg-[#9690a7] "
              >
                Add
              </button>
          
           </div>
            <ul className="flex flex-col gap-[12px] mb-[20px] ">
              {newitem.map((item) => {
                return <li className="flex justify-between items-center bg-[#B9B4C7] rounded-[5px] px-[5px] py-[3px] " key={item.id}>{item.name}{<AiOutlineDelete  onClick={()=>deleteItem(item.id)} className=" w-[28px] hover:bg-[#9690a7] rounded-[5px] h-[18px]  flex justify-center items-center cursor-pointer "/>
            }</li> ;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
