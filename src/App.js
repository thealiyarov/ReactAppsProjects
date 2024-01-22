import React from "react";
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


function App() {
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

      </Routes>
    </div>
  );
}

export default App;
