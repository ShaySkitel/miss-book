import { BookPreview } from "./book-preview.jsx";

export function BookList({ books }) {
    return books.map(book => (
        <article key={book.id} className="card">
            <BookPreview book={book}/>
        </article>
    ))
}