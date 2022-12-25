import { bookService } from "../services/book.service.js"

const { useEffect } = React

export function BookIndex() {

    useEffect(() => {
        bookService.getBooks().then(console.log)
    }, [])

    return <h2>Hello from book index page</h2>
}