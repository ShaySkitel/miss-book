export function BookPreview({ book }) {
    return <div>
        <h2>{book.title}</h2>
        
        <h3>{book.listPrice.amount} {book.listPrice.currencyCode}</h3>
    </div>
}