import { bookService } from "../services/book.service.js"

const { useState } = React

export function BookFilter({ onSetFilter }) {

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    function handleFilter({ target }) {
        const { value, name } = target
        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, [name]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterBy)
    }

    return <div>
        <form onSubmit={onSubmitFilter}>
            <input type="text" name="title" placeholder="Search book" value={filterBy.title} onChange={handleFilter} />
        </form>
    </div>
}