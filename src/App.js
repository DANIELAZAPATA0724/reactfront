import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar.jsx";
import CompShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlogs";
import CompEditBlog from "./blog/EditBlogs";
import LoginForm from "./components/login/LoginForm.jsx";
import AboutUs from "./components/about/AboutUs.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          
          
          {/* Otras rutas aquí */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;