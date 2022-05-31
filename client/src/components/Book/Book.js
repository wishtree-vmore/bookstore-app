import React, {useEffect} from "react";
import { Button, Card } from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import "./book.css";
import axios from "axios";

const Book = (props) => {

  const {_id, name, author, description, price, image } = props.book;

  const deleteHandler = async() => {
    await axios.delete(`http://localhost:4000/books/${_id}`);
    props.getAllBooks();
  }

  return (
    <Card sx={{ mx: 2, px: 3, height: '90% !important', overflowY: "auto" }} elevation={5}>

      <h1 style={{textAlign:"center"}}><u>{name}</u></h1>  
      <img src={image} alt={name} className="book-img"/>  
      <p className="book-description">{description}</p>
      <article><h3> By {author} </h3></article>
      <h2 style={{ color: "green" }}>Rs {price}</h2>
      
      <Button LinkComponent={NavLink} to={`/allbooks/${_id}`}>Update</Button>                       {/* {`books/${id}`} - backend route*/}
      <Button onClick={deleteHandler}>Delete</Button>
    </Card>
  );
};

export default Book;
