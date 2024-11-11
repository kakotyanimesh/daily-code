import React, { useState } from "react";
import One from "./Pages/One";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import DayTwo from "./Pages/DayTwo";
import LayOut from "./components/LayOut";
const App = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br to-teal-400 via-red-400 from-blue-500 text-white font-jeFont">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
            <Route path="/dayOne" element={<One/>}/>
            <Route path="/dayTwo" element={<DayTwo/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};




export default App;
