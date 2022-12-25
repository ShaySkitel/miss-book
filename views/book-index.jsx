const { useEffect, useState } = React

import { bookService } from "../services/book.service.js"

import { BookList } from "../cmps/book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"


export function BookIndex() {

    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        bookService.getBooks(filterBy).then(setBooks)
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    return <section className="book-index">
        <h2>Books</h2>

        <section className="books-filter">
            <BookFilter onSetFilter={onSetFilter}/>
        </section>
        
        <section className="books-container">
            <BookList books={books} />
        </section>
    </section>
}