import {
    getBooks,
    getBook,
    deleteBook,
    patchBook,
    searchBookByTitle,
    postBook
} from "./api/books.js";


const renderBook = (book, target) => {
    const bookCard = document.createElement('article');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
        <div class="book-card-title">${book.title}</div>
        <p class="book-card-year">${book.year}</p>
        <p class="book-card-description">${book.description}</p>
        <div class="d-flex align-item-center justify-content-between">
            <span class="book-card-rating">Rating</span>
            <span class="book-card-span">${book.rating}</span>
        </div>
        <meter value=${book.rating} min="0" max="10" class="book-card-meter"></meter>
        <div class="d-flex align-item-center justify-content-start gap-10 flex-wrap">
            <div class="book-card-tag">novel</div>
            <div class="book-card-tag">fantasy</div>
            ${
                book.categories.map(category => 
               `<span class="book-card-tag">${category}</span>`
                ).join('')
            }
        </div>
    `;
    const editBtn= bookCard.querySelector("button");
    // editBtn.addEventListener("click", async () => {
    //
    // })
    target.appendChild(bookCard)
}

//////// MAIN METHOD
(async () => {
	/////
    const books = await getBooks();
    console.log(books);
    for (let book of books) {
        const target = document.querySelector(".books-grid")
        renderBook(book, target)
    }
})();
