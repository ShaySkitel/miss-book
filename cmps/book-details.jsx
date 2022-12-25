import { utilService } from "../services/util.service.js"


export function BookDetails({ onGoBack, book }) {

    const currentYear = utilService.getCurrentYear()

    return <section className="book-details">
        {book.listPrice.isOnSale && <h2 className="green">ON SALE!</h2>}
        <span>By {book.authors}, language {book.language}, published {book.publishedDate}</span>

        {currentYear - book.publishedDate > 10 && <p>Vintage</p>}
        {currentYear - book.publishedDate < 1 && <p>New</p>}

        <h2>{book.title} - {book.pageCount} pages</h2>

        {book.pageCount < 100 && <p>Light reading</p>}
        {book.pageCount > 500 && <p>Serious reading</p> || book.pageCount > 200 && <p>Decent reading</p>}

        <p>{book.description}</p>

        <img src={book.thumbnail} alt="" />

        <h3 className={book.listPrice.amount < 20 ? "green" : book.listPrice.amount > 150 ? "red" : ""}>price {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

        <button onClick={onGoBack}>Go back</button>
    </section>
}