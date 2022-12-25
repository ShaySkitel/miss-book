import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onSelectBook }) {
    return books.map(book => (
        <article key={book.id} className="card">
            <BookPreview book={book} />
            <button onClick={() => onSelectBook(book.id)}>Details</button>
        </article>
    ))
}