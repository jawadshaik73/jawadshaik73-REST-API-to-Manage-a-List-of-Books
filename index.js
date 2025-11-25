const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Enable JSON body parsing

// ------------------------------
// In-memory books array
// ------------------------------
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
];

let nextId = 4;

// ------------------------------
// GET /books → return all books
// ------------------------------
app.get("/books", (req, res) => {
    res.json({
        success: true,
        count: books.length,
        data: books
    });
});

// ------------------------------
// GET /books/:id → get book by ID
// ------------------------------
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.json({ success: true, data: book });
});

// ------------------------------
// POST /books → add new book
// ------------------------------
app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            success: false,
            message: "Title and author are required"
        });
    }

    const newBook = {
        id: nextId++,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: newBook
    });
});

// ------------------------------
// PUT /books/:id → update book
// ------------------------------
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    books[index] = {
        id,
        title: title || books[index].title,
        author: author || books[index].author
    };

    res.json({
        success: true,
        message: "Book updated successfully",
        data: books[index]
    });
});

// ------------------------------
// DELETE /books/:id → remove book
// ------------------------------
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1)[0];

    res.json({
        success: true,
        message: "Book deleted successfully",
        data: deletedBook
    });
});

// ------------------------------
// Start server
// ------------------------------
// app.listen(PORT, () => {
//     console.log(`Book API running at http://localhost:${PORT}`);
//     console.log("Available endpoints:");
//     console.log("GET    /books");
//     console.log("GET    /books/:id");
//     console.log("POST   /books");
//     console.log("PUT    /books/:id");
//     console.log("DELETE /books/:id");
// });
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

