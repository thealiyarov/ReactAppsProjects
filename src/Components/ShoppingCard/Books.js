import React, { useEffect, useState } from "react";
import list from "./Data";

function Books({ books, setBooks }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log(books);
  }, [books]);

  function booksFn(book) {
    const findbook = books.find((bookk) => bookk.id == book.id);

    if (findbook) {
      findbook.amount += 1;
      setBooks([
        ...books.filter((bookk) => bookk.id !== book.id),
        {
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          img: book.img,
          amount: findbook.amount,
        },
      ]);
    } else {
      setBooks([
        ...books,
        {
          id: book.id,
          title: book.title,
          author: book.author,
          price: book.price,
          img: book.img,
          amount: 1,
        },
      ]);
    }
  }

  return (
    <div className="w-[100%] ">
      <div className="w-[100%] flex  gap-2 items-center justify-center">
        <span>Search Book:</span>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className=" px-[10px] border border-solid  border-[black] rounded-[8px] w-[25%] h-[30px]"
        />
      </div>
      <div className="grid grid-cols-3 overflow-auto h-[91vh] gap-4">
        {list
          .filter(
            (item) =>
              item.title
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase()) ||
              item.author
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase())
          )
          .map((book, index) => (
            <div
              className="list py-[20px] flex flex-col items-center"
              key={index}
            >
              <img className="h-[400px]" src={book.img} alt="" />
              <p>{book.title}</p>
              <p>{book.author}</p>
              <span>{book.price} $</span>
              <button
                onClick={() => booksFn(book)}
                className="px-[10px] mt-[5px] bg-[#778da9] text-white py-[3px] rounded-[5px]"
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Books;
