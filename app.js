import express from 'express';
import createHomepageTemplate from './views/index.js';

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});


app.get('/books', (req, res) => {
  const greetings = ['hi', 'ho', 'hello', 'hey'];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.send(`<p>${randomGreeting}.</p>`);
});


// listen to port


app.listen(3000, () => {
  console.log('App listening on port 3000');
});