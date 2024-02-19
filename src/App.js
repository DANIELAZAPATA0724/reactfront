import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar"; // Importa tu componente Navbar
import CompShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlogs";
import CompEditBlog from "./blog/EditBlogs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
      
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
