const createEditFormTemplate = (book) => /*html*/ `
           <form 
            hx-put="/books/${book.id}"
            hx-on::after-request="document.querySelector('form').reset()"
            hx-target=".book-list ul" 
            hx-swap="beforeend"
           >
            <input type="text" name="title" placeholder="Book title" value="${book.title}" required>
            <input type="text" name="author" placeholder="Author" value="${book.author}" required>
            <!-- xht-post gather form data and send to /books endpoint -->
            <button>Edit Book</button>
          </form>
`;

export default createEditFormTemplate;