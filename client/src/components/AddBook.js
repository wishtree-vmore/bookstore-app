import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox} from "@mui/material";
import React, { useState } from "react";
import "./Book/book.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    available: false,
    image: ""
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
      // console.log(e.target.name, e.target.value);
    }))
    
  }
  
  // const imageUpload = (e) => {
  //   console.log(e.target.files[0]);
  //   setInputs({...inputs, image: e.target.files[0]});
  // }

  const sendRequest = async() => {
    await axios.post("http://localhost:4000/books/addbook", {
      name: String(inputs.name),                                            //It should wrap inside datatype so that validation should occur every time
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res => res.data);
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(() => navigate('/allbooks'));
  }

  return (
    <div>
      <h2 className="addbookheading">Book Store</h2>

    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="25rem"
        alignContent={"center"}
        marginLeft="auto"
        marginRight="auto"
        marginTop="50px">

        <FormLabel> Name </FormLabel>
        <TextField
          name="name" value={inputs.name} onChange={handleChange} margin="normal" fullwidthvariant="outlined"></TextField>

        <FormLabel> Author </FormLabel>
        <TextField
          name="author" value={inputs.author} onChange={handleChange} margin="normal" fullwidthvariant="outlined"></TextField>

        <FormLabel> Description </FormLabel>
        <TextField
          name="description" value={inputs.description} onChange={handleChange} margin="normal" fullwidthvariant="outlined"></TextField>

        <FormLabel> Price </FormLabel>
        <TextField
          type="number" name="price" margin="normal" value={inputs.price} onChange={handleChange} fullwidthvariant="outlined"></TextField>

        <FormLabel> Image </FormLabel>
        <TextField name="image" margin="normal" value={inputs.image} onChange={handleChange} fullwidthvariant="outlined"> </TextField>

        {/* mui checkbox for availability */}
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="Available" />

        <Button className="addbtn" variant="contained" type="submit">Add Book</Button>

      </Box>
    </form>
    </div>
  )
}

export default Add;
