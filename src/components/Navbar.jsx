import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({isActive}) => (isActive ? 'active-link' : undefined);

    return (
        <nav>
            <NavLink to ="/" className={linkClass}>Home</NavLink>
            <NavLink to ="/articles" className={linkClass}>Articles</NavLink>
            <NavLink to ="/contact" className={linkClass}>Contact Us</NavLink>
        </nav>
    )
}