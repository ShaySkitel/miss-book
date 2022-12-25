import {Home} from './views/home.jsx'

export function App() {
    return <section className="app main-layout">
        <header className="app-header">
            <h1>My App</h1>
        </header>
        <main>
            <Home/>
        </main>
    </section>
}