export function BookDetails({ onGoBack, book }) {
    return <section className="book-details">
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <img src={book.thumbnail} alt="" />
        <h3>{book.listPrice.amount}</h3>
        <button onClick={onGoBack}>Go back</button>
    </section>
}