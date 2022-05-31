const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv');
const routes = require('./routes/books.route');

//variable for express function
const app = express();                                                                    

//give path to env file
env.config({path: 'config.env'});                                                           
const PORT = process.env.PORT || 8000;

//specially created to pass json data 
app.use(express.json());                                                             
app.use(bodyParser.json());                                                                
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//using routes
app.use('/books', routes);

app.get('/home', (req, res) => {
    res.send('Hello World')
})

//....connecting to database
//connects to Db and returns promise
mongoose.connect(                                                                           
    "mongodb://localhost:27017/Books",                                                     
    {
        useNewUrlParser:true, 
        useUnifiedTopology: true
    }
    ).then(() => {                                                                         
        console.log("Database Connected");
    });


//....running server on given port
//callback function(once the server runs, console.log will execute)
app.listen(process.env.PORT, () => {                                                        
    console.log(`Server is Running on port ${process.env.PORT}`);
})


