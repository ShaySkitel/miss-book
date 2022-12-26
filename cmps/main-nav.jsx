const {NavLink} = ReactRouterDOM

export function MainNav() {
    return <nav className="main-nav flex justify-between align-center">
        <h1>Miss Book</h1>
        <ul className="main-nav clean-list flex">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='book'>Books</NavLink></li>
        </ul>
    </nav>
}