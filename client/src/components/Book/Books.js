import React,{useEffect, useState} from 'react';
import axios from "axios";
import Book from "./Book";
import { Grid, Typography } from '@mui/material';

const fetchHandler = async() => {
    return await axios.get("http://localhost:4000/books/allbooks")
    .then((res) => res.data);
}

const Books = () => {
    const[books, setBooks] = useState();

    const getAllBooks = () => {
      fetchHandler().then((data) => setBooks(data.books));
    }

    useEffect(() => {
      getAllBooks();
    }, []);

  return (
    // <div>
      <Grid container sx={{my: 2}}>
        {books && books.map((book, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Book book={book} getAllBooks={getAllBooks}/>
          </Grid>
        ))}
        {books && books.length === 0 && (
          <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h5" textAlign="center">
            No books available!
          </Typography>
          </Grid>
        )}
      </Grid>
    // </div>
  )
}

export default Books

//useEffect is a function which runs after a component gets rendered into the browser and it runs only once unless you provide dependency array. 