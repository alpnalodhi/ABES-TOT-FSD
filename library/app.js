const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// In-memory database for storing books
let books = [];

// Helper function to generate unique IDs
const generateId = () => {
  return books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
};

// GET /books → List all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// POST /books → Add a new book
app.post('/books', (req, res) => {
  const { title, author, year, status } = req.body;
  if (!title || !author || !year || !status) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBook = {
    id: generateId(),
    title,
    author,
    year,
    status
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id/issue → Change status to issued
app.put('/books/:id/issue', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (book.status === 'issued') {
    return res.status(400).json({ message: 'Book is already issued' });
  }

  book.status = 'issued';
  res.status(200).json(book);
});

// PUT /books/:id/return → Change status to available
app.put('/books/:id/return', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (book.status === 'available') {
    return res.status(400).json({ message: 'Book is already available' });
  }

  book.status = 'available';
  res.status(200).json(book);
});

// DELETE /books/:id → Remove a book from collection
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(bookIndex, 1);
  res.status(200).json({ message: 'Book deleted successfully' });
});

app.listen(port, () => {
  console.log(`Library app running on http://localhost:${port}`);
});
