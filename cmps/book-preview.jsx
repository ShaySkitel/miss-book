export function BookPreview({ book }) {
    return <div>
        <h2>{book.title}</h2>
        <img src={book.thumbnail} alt={book.title} />
        <h3>{book.listPrice.amount} {book.listPrice.currencyCode}</h3>
    </div>
}