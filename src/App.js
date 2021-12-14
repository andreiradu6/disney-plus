import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';
import AddMovies from './components/AddMovies';

function App() {
  return (
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/add-movie" element={<AddMovies />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
