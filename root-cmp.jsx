const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { MainNav } from './cmps/main-nav.jsx'
import { About } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'
import { Home } from './views/home.jsx'

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
                </Routes>
            </main>
        </section>
    </Router>
}