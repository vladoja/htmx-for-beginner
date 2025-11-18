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
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;