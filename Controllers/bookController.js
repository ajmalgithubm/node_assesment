const BookModel = require("../Models/BookModel");


module.exports = {

    // ADD BOOK ( POST )
    addBookController: async (req, res) => {
        try {
            const { title, author, summary } = req.body;
            if (!title || !author || !summary) {
                return res.status(401).send({
                    success: false,
                    message: "All Fields is Required"
                })
            }
            const book = new BookModel({ title, author, summary})
            await book.save()
            res.status(200).send({ success:true, message: "book added"})
        } catch (err) {
            res.status(500).send({ success: false, message: err})
        }
    },

    //  Retrive all books (GET)
    getALLBooksController: async (req, res) => {
        try {
            const books = await BookModel.find({});
            res.status(200).send({ success: true, books, message:"successfully get all books"})
        } catch (err) {
            res.status(500).send({ success: false, message: err})
        }
    },

    // update a Book (PUT)
    updateBookController: async(req, res) => {
        try {
            const {bid} = req.params;
            // this title, author, summary may exist value / new value
            const { title, author, summary} = req.body;
            const book = await BookModel.findByIdAndUpdate(bid, { title, author, summary}, {new: true})
            res.status(200).send({ success: true, message: "Updated", book})
        } catch (err) {
            res.status(500).send({ success: false, message: err})
        }
    },

    // delete a BOOK by I( DELETE)
    deleteBookController: async(req, res) => {
        try {
            const {bid} = req.params;
            const book = await BookModel.findByIdAndDelete(bid);
            res.status(200).send({ success: true, message:"deleted", book})
        } catch (err) {
            res.status(500).send({ success: false, message: err})
        }
    },

    // get The single BOOK ( GET )
    getSingleBookController: async(req, res) => {
        try {
            const {bid} = req.params;
            const book = await BookModel.findById(bid);
            res.status(200).send({ success: true, message:"got book", book})
        } catch (err) {
            res.status(500).send({ success: false, message: err})
        }
    }

} 