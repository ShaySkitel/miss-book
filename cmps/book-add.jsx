
const { useState } = React
const { useNavigate } = ReactRouterDOM

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { googleBookService } from "../services/googleBook.service.js"

export function BookAdd() {

    const [bookName, setBookName] = useState('')
    const [googleBooks, setGoogleBooks] = useState([])
    const navigate = useNavigate()

    function handleInput({ target }) {
        let { value } = target
        setBookName(value)
    }

    function onSearchBook(ev) {
        ev.preventDefault()
        googleBookService.getGoogleBooks(bookName)
            .then(setGoogleBooks)
    }

    function onAddGoogleBook(book) {
        googleBookService.addGoogleBook(book)
            .then((book) => {
                showSuccessMsg('Book added')
                navigate(`/book/${book.id}`)
            })
            .catch((err) => {
                console.log('Hadd issues adding google book ', err)
                showErrorMsg('Failed to add book')
            })
    }

    return <form onSubmit={onSearchBook}>
        <input onChange={handleInput} name="title" value={bookName} type="text" placeholder="Book name..." />
        {googleBooks[0] && <ul className="clean-list book-add">
            {googleBooks.map(book => <li className="flex justify-between" key={book.id}><span>{book.title}</span><span onClick={() => { onAddGoogleBook(book) }} className="book-add-btn">+</span></li>)}
        </ul>}
        <button>Search</button>
    </form>

}