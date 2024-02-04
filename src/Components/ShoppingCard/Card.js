import React, { useEffect, useState } from "react";

function Card({ books, setBooks }) {
  const [total, setTotal] = useState(0);

  function increment(item) {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.id === item.id
          ? { ...book, amount: book.amount + 1 } // İlgili kitabın amount'ını artır
          : book
      );
      return updatedBooks;
    });
  }

  function decrement(item) {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.id === item.id
          ? { ...book, amount: Math.max(0, book.amount - 1) } // amount'ı negatif olmasın
          : book
      );
      return updatedBooks;
    });
  }

  function removeBookFn(id) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  useEffect(() => {
    let totalAmount = books.reduce((total, item) => total + item.price * item.amount, 0);
    setTotal(totalAmount);
  }, [books]);

  return (
    <div className="w-[100%] h-[94.5vh] ">
      <div className=" h-[85vh] overflow-auto py-[20px] flex flex-col items-center gap-[20px] px-[20px]">
        {books.map((item, index) => (
          books.findIndex((book) => book.id === item.id) === index ? (
            <div
              className="list w-[70%] justify-between flex items-center "
              key={index}
            >
              <div className="flex">
                <div className="  w-[100px]">
                  <img className="h-[150px]" src={item.img} alt="" />
                </div>

                <div className="names h-[100%] pl-[10px] pt-[30px]">
                  <p>{item.title}</p>
                  <p className="text-[1.5rem]">{item.author}</p>
                </div>
              </div>

              <div className="btns items-center justify-evenly w-[500px] h-[70px] mr-[20px] flex">
                <button
                  className="bg-[#ced4da] h-[35px]  w-auto px-[20px] ml-[20px] rounded-[5px] mr-[20px] font-bold text-[18px]"
                  onClick={() => increment(item)}
                >
                  +
                </button>
                <div className="w-[20px] font-bold text-[18px] flex items-center">
                  <span>{item.amount}</span>
                </div>
                <button
                  className="bg-[#ced4da] h-[35px] w-auto px-[20px] rounded-[5px] ml-[10px] font-bold text-[18px]"
                  onClick={() => decrement(item)}
                >
                  -
                </button>
                <div className="price font-bold text-[18px]  w-[70px]  flex items-center  ml-[20px]">
                  <span>{item.price * item.amount}$</span>
                  
                </div>
                <button
                  onClick={() => removeBookFn(item.id)}
                  className="bg-[#6c757d] ml-[20px] h-[35px] w-auto text-white px-[20px] py-[5px] rounded-[5px]"
                >
                  Remove Book
                </button>
              </div>
            </div>
          ) : ""
        ))}
      </div>
      <div className="flex items-center justify-end pr-[30px] gap-[30px] px-[20px] text-[25px]">
        <h1>Total:</h1>
        <p>{total} $</p>
      </div>
    </div>
  );
}

export default Card;
