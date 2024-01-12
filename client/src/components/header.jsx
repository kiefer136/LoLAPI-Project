export default function Header() {
    return (
        <header id="page-header">
            <h2 className="site-logo">Get<span className="site-logo-secondary">Boosted</span></h2>
            <nav className="nav-list-wrapper">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <h5>Home</h5>
                    </li>
                    <li className="nav-list-item">
                        <h5>Boosts</h5>
                    </li>
                    <li className="nav-list-item">
                        <h5>Login</h5>
                    </li>
                </ul>
            </nav>
        </header>
    )
}