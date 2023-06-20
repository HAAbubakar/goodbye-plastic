import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Topbar from "./component/layout/topbar/Topbar";
import Footer from "./component/layout/footer/Footer";

function App() {
  return (
    <>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>    
      <hr/>
      <Footer/>
      </>
  );
}

export default App;
