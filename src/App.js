import React, { useState } from "react";
import Menu from "./Components/Menu/Menu.js";
import RandomProject from "./Components/RandomProjects/RandomProject.js";
import GalleryApp from "./Components/GalleryApp/GalleryApp.js";
import { Routes, Route } from "react-router-dom";
import ToDoApp from "./Components/ToDoApp/ToDoApp.js";
import Home from "./Components/Home/Home.js";
import RandomQuote from "./Components/RandomQuote/RandomQuote.js";
import Quiz from "./Components/Quiz/Quiz.js";
import Pagination from "./Components/Pagination/Pagination.js";
import ColorGenerator from "./Components/ColorGenerator/ColorGenerator.js";
import ScrollBarIndicator from "./Components/ScrollBarIndicator/ScrollBarIndicator.js";
import Books from "./Components/ShoppingCard/Books.js";
import Card from "./Components/ShoppingCard/Card.js";
import Navbar from "./Components/ShoppingCard/Navbar.js";
import Layout from "./Components/ShoppingCard/Layout.js";


function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="flex  w-[100%]">
      <Menu/>
      <Routes> 
      <Route index={true} element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/randomnumbergenerator" element={<RandomProject />} />
         <Route path="/galleryapp" element={<GalleryApp />} />
         <Route path="/todolistapp" element={<ToDoApp />} />
         <Route path="/randomquote" element={<RandomQuote />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="/pagination" element={<Pagination />} />
         <Route path="/colorgenerator" element={<ColorGenerator />} />
         <Route path="/scrollbarindicator" element={<ScrollBarIndicator />} />
         <Route path="/shoppingcard" element={<Layout books={books} />}>
                <Route index={true} element={<Books setBooks={setBooks} books={books}/>}/>
                <Route path="card" element={<Card setBooks={setBooks} books={books} />}/>
          </Route>

      </Routes>
    </div>
  );
}

export default App;
