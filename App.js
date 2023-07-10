import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Course from "./Components/Course";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Navbar/>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Course" element={<Course/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;

