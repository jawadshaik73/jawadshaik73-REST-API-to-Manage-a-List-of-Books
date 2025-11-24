const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// OPTIONAL HOME ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to the Book API 📚");
});

// BOOK LIST
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
];

// GET ALL BOOKS
app.get("/books", (req, res) => {
    res.json(books);
});

// ADD BOOK
app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and author required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// UPDATE BOOK
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;

    res.json(book);
});

// DELETE BOOK
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const removed = books.splice(index, 1);
    res.json(removed[0]);
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Book API is running on http://localhost:${PORT}`);
});
