import {Box, Button, Checkbox, FormControlLabel, FormLabel,  TextField,} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState({});                 //these inputs will now be the dynamic inputs and all data will get through axios request.
  const [checked, setChecked] = useState(false);
  const id = useParams().id;
  const history = useNavigate();
  console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:4000/books/${id}`)
        .then((res) => res.data)                            //whenever we are sending res.data, this data will set inputs
        .then(data => setInputs(data.book));                          
    };
    fetchHandler()
  }, [id]);

  const sendRequest = async() => {
    await axios.put(`http://localhost:4000/books/${id}`, {      //put request gets another parameter and that will contain all the data which we have to update
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: String(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked)
    }).then((res) => res.data)
  }

  const handleChange = (e) => {
    console.log(e);
    // console.log(e.target.name, e.target.value);
    setInputs((prevState) => ({
        ...prevState, 
        [e.target.name]: e.target.value
    }))
    
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/allbooks"));
  };

  console.log(inputs);

  return (
    <div>
      <h2 className="addbookheading">Update Book</h2>
        {/* form will be in expressions like when there are inputs then only the form will render */}
      {inputs && <form onSubmit={handleSubmit}>                
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth="25rem"
          alignContent={"center"}
          marginLeft="auto"
          marginRight="auto"
          marginTop="50px"
        >
          <FormLabel> Name </FormLabel>
          <TextField
            name="name"
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullwidthvariant="outlined"
          ></TextField>

          <FormLabel> Author </FormLabel>
          <TextField
            name="author"
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullwidthvariant="outlined"
          ></TextField>

          <FormLabel> Description </FormLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullwidthvariant="outlined"
          ></TextField>

          <FormLabel> Price </FormLabel>
          <TextField
            type="number"
            name="price"
            margin="normal"
            value={inputs.price}
            onChange={handleChange}
            fullwidthvariant="outlined"
          ></TextField>

          <FormLabel> Image </FormLabel>
          <TextField
            name="image"
            margin="normal"
            value={inputs.image}
            onChange={handleChange}
            fullwidthvariant="outlined"
          >
          
          </TextField>

          {/* mui checkbox for availability */}
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />

          <Button className="addbtn" variant="contained" type="submit">
            Update Book
          </Button>
        </Box>
      </form>
      }
    </div>
  );
};

export default BookDetail;
