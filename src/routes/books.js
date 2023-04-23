const router = require("express").Router();
const BookList = require("../models/bookList");


// to get all the books of a user

router.get("/books/all", async (req, res) => {
    const data = await BookList.findAll();
    try {
        if (data) {
            res.json({
                status: 200,
                data
            })
        } else {
            res.json({
                message: "No books to display !"
            });
        }
    } catch (err) {
        res.json({
            status: 400,
            message: err.message
        });
    }
});


// to add a new book

router.post("/books/add", async (req, res) => {
    const { title, isbn, author, description, publishedDate, publisher, genre } = req.body;
    try {
        const newBook = await BookList.create();
        res.json({
            status: 200,
            message: "book added",
            newBook
        });
    } catch (err) {
        res.json({
            status: 400,
            message: err.message
        });
    }
});

// to delete a book

router.delete("/books/delete/:id", async (req, res) => {
    const id = req.params._id;
    const result = await BookList.findByIdAndDelete({ id });

});


// to edit / update the details of a particular book by id

router.patch("/books/update/:id", async (req, res) => {
    const id = req.params._id;
    const { title, isbn, author, description, publishedDate, publisher, genre } = req.body;
    try {
        const data = await BookList.findByIdAndUpdate({ id });
        res.json({
            status: 200,
            message: "updated successfully",
            data
        });
    } catch (err) {
        res.json({
            status: 400,
            message: "failed to update"
        });
    }
});