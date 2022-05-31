const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        min: 3,
        max: 12
    },
    description: {
        type: String,
        required: true,
        min: 5, 
        max: 100 
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);

//bydefault mongoose will save "Book" as "books" in database.