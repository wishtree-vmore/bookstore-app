const express = require('express');
const route = express.Router();
const booksController = require('../controllers/books.controller');

route.post('/addbook', booksController.addNewBook)

route.get('/allbooks', booksController.getAllBooks);

route.get('/:bookId', booksController.getById);

route.put('/:bookId', booksController.updateBook);

route.delete('/:id', booksController.deleteBook);

module.exports = route;                                             //route will get export as a module