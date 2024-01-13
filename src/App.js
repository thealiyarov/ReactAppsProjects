import React from "react";
import Menu from "./Components/Menu/Menu.js";
import RandomProject from "./Components/RandomProjects/RandomProject.js";
import GalleryApp from "./Components/GalleryApp/GalleryApp.js";
import { Routes, Route } from "react-router-dom";
import ToDoApp from "./Components/ToDoApp/ToDoApp.js";


function App() {
  return (
    <div className="flex">
      <Menu/>
      <Routes>
         <Route path="/randomnumbergenerator" element={<RandomProject />} />
         <Route path="/galleryapp" element={<GalleryApp />} />
         <Route path="/todolistapp" element={<ToDoApp />} />

      </Routes>
    </div>
  );
}

export default App;
