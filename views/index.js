// backticks allow for multi-line strings and embedded expressions
// the /*html*/ comment is just a hint for syntax highlighting in some editors for Inline HTML
const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <!-- book list here later -->
           <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
           <form 
            hx-post="/books"
            hx-on::after-request="document.querySelector('form').reset()"
            hx-target=".book-list ul" 
            hx-swap="beforeend"
           >
            <input type="text" name="title" placeholder="Book title" required>
            <input type="text" name="author" placeholder="Author" required>
            <!-- xht-post gather form data and send to /books endpoint -->
            <button>Add Book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;