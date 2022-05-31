import React from "react";
import "./App.css";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import { Grid} from '@mui/material'
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    // <>
      <Grid container>
        {/* <header> */}
        <Grid item xs={12} md={12} >
          <Header />
        </Grid>
        {/* </header> */}
        {/* <main> */}
        <Grid item xs={12} md={12} sx={{margin: "15px"}}>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/addbook" element={<AddBook/>} exact/>
            <Route path="/allbooks" element={<Books/>} exact/>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/allbooks/:id" element={<BookDetail/>} exact/>
          </Routes>
        {/* </main> */}
        </Grid>
      </Grid>
    // </>
  );
}

export default App;
