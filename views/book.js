const createBookTemplate = (book) => /*html*/ `
<li data-id="${book.id}">
    <div class="details">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button>Delete</button>
    </div>
</li>
`;
export default createBookTemplate;