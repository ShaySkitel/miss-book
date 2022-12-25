import { LongText } from "./long-text.jsx";

export function BookPreview({ book }) {
    return <div>
        <h2>{book.title}</h2>
        <LongText txt={book.description} length={30}/>
        <h3>{book.listPrice.amount} {book.listPrice.currencyCode}</h3>
    </div>
}