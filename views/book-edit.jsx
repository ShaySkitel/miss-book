const { useState } = React
const { useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {

    const [book, setBook] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()

    console.log(book)

    function handleInput({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value

        if (field === 'amount') {
            setBook((prevBook) => ({ ...prevBook, listPrice: { ...prevBook.listPrice, [field]: value } }))
        } else if (field === 'authors') {
            const authors = value.split(',')
            setBook((prevBook) => ({ ...prevBook, authors }))
        } else if (field === 'categories') {
            const categories = value.split(',')
            setBook((prevBook) => ({ ...prevBook, categories }))
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
            <input required onChange={handleInput} value={book.title} name="title" type="text" placeholder="Book name..." />
            <input required onChange={handleInput} value={book.description} name="description" type="text" placeholder="Description..." />
            <input required onChange={handleInput} value={book.pageCount} name="pageCount" type="number" placeholder="Page count..." />
            <input required onChange={handleInput} value={book.publishedDate} name="publishedDate" type="number" placeholder="Publish date..." />
            <input required onChange={handleInput} value={book.authors} name="authors" type="text" placeholder="Authors... (ex. Romi,Tomi)" />
            <input required onChange={handleInput} value={book.categories} name="categories" type="text" placeholder="Categories... (ex. Fantasy,Horror)" />
            <input required onChange={handleInput} value={book.listPrice.amount} name="amount" type="number" placeholder="Book price..." />
            <button>Save</button>
            <button type="button">Go back</button>
        </form>
    </section>
}