import {Link} from "react-router-dom";

function Header() {
    return <nav className="teal accent-3">
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">React SPA</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
            </ul>
        </div>
    </nav>
}

export {Header}