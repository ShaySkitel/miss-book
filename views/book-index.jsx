const { useEffect, useState } = React

import { bookService } from "../services/book.service.js"

import { BookList } from "../cmps/book-list.jsx"


export function BookIndex() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.getBooks().then(setBooks)
    }, [])

    return <section className="book-index">
        <h2>Books</h2>
        <section className="books-container">
            <BookList books={books}/>
        </section>
    </section>
}