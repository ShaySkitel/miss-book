const { useEffect, useState } = React
const {useNavigate} = ReactRouterDOM

import { bookService } from "../services/book.service.js"

import { BookList } from "../cmps/book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"


export function BookIndex() {

    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        bookService.getBooks(filterBy).then(setBooks)
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onSelectBook(bookId) {
        bookService.getById(bookId).then(setSelectedBook)
    }

    return <section className="book-index">
        <h2>Books</h2>

        <section className="books-filter">
            <BookFilter onSetFilter={onSetFilter} />
        </section>

        <button onClick={() => navigate('/book/edit')}>Add book</button>

        <section className="books-container">
            <BookList books={books} onSelectBook={onSelectBook} />
        </section>
    </section>
}