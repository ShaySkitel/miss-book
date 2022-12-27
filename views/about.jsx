const { Outlet, Link } = ReactRouterDOM

export function About() {
    return <section className="about">
        <h2>A little bit about our book shop</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique. Suscipit dolor voluptas rerum recusandae quod consequuntur ad reprehenderit animi, exercitationem molestiae illo vel sunt natus aut et doloribus quas?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat error debitis exercitationem quod, molestiae voluptatum necessitatibus repudiandae illum atque placeat! Nemo numquam, accusamus perferendis excepturi dolorum ad quasi illum.
            Incidunt modi mollitia quasi eligendi, error possimus totam sit voluptatibus ducimus fugit, iusto vitae nobis illum quae placeat perferendis sed hic dolorum quidem enim cumque non. Sequi mollitia fugit beatae.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, similique. Suscipit dolor voluptas rerum recusandae quod consequuntur ad reprehenderit animi, exercitationem molestiae illo vel sunt natus aut et doloribus quas?</p>

        <Link to='/about'>Index</Link> |
        <Link to='/about/team'>Team</Link> |
        <Link to='/about/goal'>Goal</Link>

        <Outlet />
    </section>
}