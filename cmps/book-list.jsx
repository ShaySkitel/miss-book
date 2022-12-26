const {useNavigate} = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onSelectBook }) {
    const navigate = useNavigate()

    return books.map(book => (
        <article key={book.id} className="card">
            <BookPreview book={book} />
            <button onClick={() => navigate(`/book/${book.id}`)}>Details</button>
        </article>
    ))
}