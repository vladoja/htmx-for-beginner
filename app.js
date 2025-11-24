import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';
import BOOKS_DATA from './data/data.js';


// create app
const app = express();
var maxId = initMaxId(BOOKS_DATA);

app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});


app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});


app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { title, author };
  maxId++;
  newBook.id = String(maxId);
  console.log('Assigned ID to new book:', newBook.id);
  BOOKS_DATA.push(newBook);
  res.redirect(`/books/${newBook.id}`);
});


app.get('/books/edit/:id', (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);
  if (!book) {
    res.status(404).send('Book not found');
    return;
  }
  res.send(createEditFormTemplate(book));
});


app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = BOOKS_DATA.find((b) => b.id === id);
  if (book) {
    book.title = title;
    book.author = author;

    console.log('Updated book:', book);
    res.send(createBookTemplate(book));
  } else {
    res.status(404).send('Book not found');
  }
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);
  if (book) {
    res.send(createBookTemplate(book));
  } else {
    res.status(404).send('Book not found');
  }
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const idx = BOOKS_DATA.findIndex((b) => b.id === id);
  if (idx !== -1) {
    BOOKS_DATA.splice(idx, 1);
  }
  res.send();
});


app.post('/books/search', (req, res) => {
  // const { search } = req.body;
  const search = req.body.search || '';
  const filteredBooks = BOOKS_DATA.filter((book) => {
    const searchLower = search.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower)
    );
  });
  console.log('Search query:', search);
  console.log('Filtered books:', filteredBooks);
  res.send(createListTemplate(filteredBooks));
});


// listen to port


app.listen(3000, () => {
  console.log('App listening on port 3000');
});



function initMaxId(data) {
  let max = 0;
  for (const { id } of data) {
    const num = Number(id);
    if (num > max) max = num;
  }
  return max;
}