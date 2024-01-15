import React from "react";
import Menu from "./Components/Menu/Menu.js";
import RandomProject from "./Components/RandomProjects/RandomProject.js";
import GalleryApp from "./Components/GalleryApp/GalleryApp.js";
import { Routes, Route } from "react-router-dom";
import ToDoApp from "./Components/ToDoApp/ToDoApp.js";
import Home from "./Components/Home/Home.js";
import RandomQuote from "./Components/RandomQuote/RandomQuote.js";


function App() {
  return (
    <div className="flex">
      <Menu/>
      <Routes>
      <Route index={true} element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/randomnumbergenerator" element={<RandomProject />} />
         <Route path="/galleryapp" element={<GalleryApp />} />
         <Route path="/todolistapp" element={<ToDoApp />} />
         <Route path="/randomquote" element={<RandomQuote />} />

      </Routes>
    </div>
  );
}

export default App;
