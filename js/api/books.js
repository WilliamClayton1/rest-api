const getBooks = async () => {
    const url = "http://localhost:3000/books"
    const options = {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(url, options)
    const books = await response.json()
    return books
}


const getBook = async (id) => {
    const url = `http://localhost:3000/books/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const book = await response.json();
    return book
}

const deleteBook = async (id) => {
    const url = `http://localhost:3000/books/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const book = await response.json();
    return book
}

const postBook = async  (book) => {
    try {
        const searchResult = await searchBookByTitle(book.title);
        if (searchResult.length > 0) {
            throw new Error("Book already Exists in the database.")
        }
        const url = "http://localhost:3000/books";
        const body = book
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }
        const response = await fetch(url, options);
        const newId = await response.json();
        return newId
    } catch(error) {
        console.log(error);
        return null;
    }

}


const patchBook = async  (book) => {
    try {
        const url = `http://localhost:3000/books/${book.id}`;
        const body = book
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }
        const response = await fetch(url, options);
        const newId = await response.json();
        return newId
    } catch(error) {
        console.log(error);
        return null;
    }

}

const searchBookByTitle = async (title) => {
    const url = `http://localhost:3000/books?title=${title}`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    const response = await fetch(url, options);
    const books = await response.json();
    return books
}

export {getBooks, postBook, patchBook, searchBookByTitle, deleteBook, getBook}