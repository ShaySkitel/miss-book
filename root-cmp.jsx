const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { BookDetails } from './views/book-details.jsx'
import { MainNav } from './cmps/main-nav.jsx'
import { About } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'
import { Home } from './views/home.jsx'
import { BookEdit } from './views/book-edit.jsx'
import { UserMsg } from './cmps/user-msg.jsx'

export function App() {
    return <Router>
        <section className="app main-layout">
            <header className="app-header">
                <MainNav />
            </header>
            <main>
                <Routes>
                    <Route element={<Home />} path='/'></Route>
                    <Route element={<About />} path='/about'></Route>
                    <Route element={<BookIndex />} path='/book'></Route>
                    <Route element={<BookEdit />} path='/book/edit'></Route>
                    <Route element={<BookDetails />} path='/book/:bookId'></Route>
                </Routes>
            </main>
            <UserMsg />
        </section>
    </Router>
}