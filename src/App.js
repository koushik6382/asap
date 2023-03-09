import React from "react";
import {Routes,Route}from "react-router-dom";
// import CardContainer from "./components/CardContainer";
// import Navbar from "./components/Navbar";
import Home from "./Home"
// import AboutPage from "./Aboutpage/contact";
import Main from "./Main";
import Login from "./Login";
import Signin from "./Signin"
// import Index from "./Index/Index";
import "./index.scss";



export default function App() {
 
  return (
    <div>  
      {/* <Navbar/>
      <Home/> */}
      {/* <AboutPage/> */}
      {/* <CardContainer/> */}
      <Main/>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="Signin" element={<Signin/>}/>
        {/* <Route path="Index" element={<Index/>}/> */}
        <Route path="Home" element={<Home/>}/>
      </Routes>
    </div>
  );
}