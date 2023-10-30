const {addBookController, getALLBooksController, updateBookController, deleteBookController, getSingleBookController} = require("../Controllers/bookController");

const express = require("express");

const router = express.Router();

// ADD BOOK
router.post('/', addBookController);


// GET ALL BOOKS
router.get('/', getALLBooksController);

// GET a single book
router.get('/:bid', getSingleBookController);


// Update a Book
router.put('/:bid', updateBookController);

 
// Delete A book
router.delete('/:bid', deleteBookController);




module.exports = router;