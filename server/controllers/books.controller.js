const Book = require('../models/books.model');  

exports.addNewBook = async(req, res, next) => {
    const {name, author, description, price, available, image} = req.body;                                                                        //req.body contains all of these field and we are destructuring this field from req.body so it contains all of the functionalities.
    let book;
    try{
        book = new Book({                                                    //it will create a new instance of bookSchema which we have built
            name,                                                            //req.body is main function, it contains key-value pair of data whcih is submitted in request body and by default it is undefined and it is populated when we use, so it allows us to access data in the string or json object from the client side  
            author,
            description,
            price,
            available,
            image
        })
        await book.save();
    } catch(err){
        console.log(err, "Something error");
    }
    if(!book){
        return res.status(500).json({message: "Unable to add book!"})
    }
    return res.status(201).json({message: "Book Successfully Added ."});
}


exports.getAllBooks = async(req, res) => {
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message: "No books found!"})
    }
    return res.status(200).json({books})                            //else statement
}



exports.getById = async(req, res, next) => {
    const id = req.params.bookId;                                   //params gets id from url
    let book;
    try{
        book = await Book.findById(id);
    }catch(err) {
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message: "No book found!"})
    }
    return res.status(200).json({book});
}

exports.updateBook = async(req, res, next) => {
    const id = req.params.bookId;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name, 
            author,
            description,
            price,
            available,
            image 
            }
        );
        book = await book.save();
    }catch(err) {
        console.log(err); 
    }

    if(!book){
        return res.status(400).json({message: "Unable to update book!"})
    }
    return res.status(200).json({message: "Book Successfully Updated ."})
}

exports.deleteBook = async(req, res, next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message: "No book found"});
    }
    return res.status(200).json({message: "Book Successfully Deleted "});
}

