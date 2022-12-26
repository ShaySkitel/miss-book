const { useState } = React
const {useNavigate} = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {

    const [book, setBook] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()

    console.log(book)

    function handleInput({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value

        if (field === 'amount') {
            setBook((prevBook) => ({ ...prevBook, listPrice: {...prevBook.listPrice, [field]: value} }))
        } else {
            setBook((prevBook) => ({ ...prevBook, [field]: value }))
        }
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(book).then((book) => {
            navigate(`/book/${book.id}`)
        })
    }

    return <section className="book-edit">
        <form onSubmit={onSaveBook}>
            <input onChange={handleInput} value={book.title} name="title" type="text" placeholder="Book name..." />
            <input onChange={handleInput} value={book.listPrice.amount} name="amount" type="number" placeholder="Book price..." />
            <button>Save</button>
            <button type="button">Go back</button>
        </form>
    </section>
}