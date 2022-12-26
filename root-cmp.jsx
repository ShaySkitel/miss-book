const { useState } = React

import { MainNav } from './cmps/main-nav.jsx'
import { About } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'
import { Home } from './views/home.jsx'

export function App() {

    const [page, setPage] = useState('books')

    return <section className="app main-layout">
        <header className="app-header">
            <MainNav />
        </header>
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}