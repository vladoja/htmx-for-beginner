// import BOOKS_DATA … imports the default export. Only one default export allowed per module
// import { BOOKS_DATA } … imports a named export
import BOOKS_DATA from "../data/data.js";
import createBookTemplate from "./book.js";

// console.log(BOOKS_DATA);
const createListTemplate = () => /*html*/`
<ul>
    ${BOOKS_DATA.map((book) =>
    createBookTemplate(book)).join('')}
</ul >
    `;
export default createListTemplate;