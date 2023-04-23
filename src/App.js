import './App.css';
import React from "react";
import Login from "./components/user/login";
import './components/user/login.css';
import Register from "./components/user/register";
import AllBooks from "./components/books/AllBooks";
import Addbook from "./components/books/Addbook";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/all' element={<AllBooks />} />
          <Route path='/add' element={<Addbook />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
