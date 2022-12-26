const {useEffect, useState} = React
const {useParams, useNavigate} = ReactRouterDOM

import { utilService } from "../services/util.service.js"
import {bookService} from "../services/book.service.js"

import { LongText } from "../cmps/long-text.jsx"


export function BookDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const currentYear = utilService.getCurrentYear()

    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook(){
        bookService.getById(params.bookId).then(setBook)
    }

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        {book.listPrice.isOnSale && <h2 className="green">ON SALE!</h2>}
        <span>By {book.authors}, language {book.language}, published {book.publishedDate}</span>

        {currentYear - book.publishedDate > 10 && <p>Vintage</p>}
        {currentYear - book.publishedDate < 1 && <p>New</p>}

        <h2>{book.title} - {book.pageCount} pages</h2>

        {book.pageCount < 100 && <p>Light reading</p>}
        {book.pageCount > 500 && <p>Serious reading</p> || book.pageCount > 200 && <p>Decent reading</p>}

        <LongText txt={book.description} length={30}/>

        <img src={book.thumbnail} alt="" />

        <h3 className={book.listPrice.amount < 20 ? "green" : book.listPrice.amount > 150 ? "red" : ""}>price {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

        <button onClick={() => navigate('/book')}>Go back</button>
    </section>
}