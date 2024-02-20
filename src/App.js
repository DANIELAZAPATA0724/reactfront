import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar.jsx";
import CompShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlogs";
import CompEditBlog from "./blog/EditBlogs";
// import AboutUs from "./pages/AboutUs"; 
// import Schedule from "./pages/Schedule";
// import OpeningHours from "./pages/OpeningHours";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* <Route path="/schedule" element={<Schedule />} /> */}
          {/* <Route path="/opening-hours" element={<OpeningHours />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
