import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
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
  res.send(createListTemplate());
});


app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { title, author };
  maxId++;
  newBook.id = String(maxId);
  console.log('Assigned ID to new book:', newBook.id);
  BOOKS_DATA.push(newBook);
  res.send(createListTemplate());
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