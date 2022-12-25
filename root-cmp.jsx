const { useState } = React

import { About } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'
import { Home } from './views/home.jsx'

export function App() {

    const [page, setPage] = useState('home')

    return <section className="app main-layout">
        <header className="app-header flex justify-between align-center">
            <h1>My App</h1>
            <ul className="main-nav clean-list flex">
                <li onClick={() => setPage('home')}>Home</li>
                <li onClick={() => setPage('about')}>About</li>
                <li onClick={() => setPage('books')}>Books</li>
            </ul>
        </header>
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}