const { useEffect, useState } = React

import { bookService } from "../services/book.service.js"

import { BookList } from "../cmps/book-list.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"
import { BookDetails } from "../cmps/book-details.jsx"


export function BookIndex() {

    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        bookService.getBooks(filterBy).then(setBooks)
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onSeletBook(bookId) {
        bookService.getById(bookId).then(setSelectedBook)
    }

    console.log(selectedBook)

    return <section className="book-index">
        {!selectedBook && <div>
            <h2>Books</h2>

            <section className="books-filter">
                <BookFilter onSetFilter={onSetFilter} />
            </section>

            <section className="books-container">
                <BookList books={books} onSelectBook={onSeletBook} />
            </section>
        </div>}


        {selectedBook && <BookDetails book={selectedBook} onGoBack={() => setSelectedBook(null)}/>}
    </section>
}