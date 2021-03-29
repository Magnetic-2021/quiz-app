import {useState, useEffect} from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

import Logo from "../Logo/Logo";

const Navbar = () => {

    const useBigLogo = (query) => {
        const [matches, setMatches] = useState(false);

        useEffect(() => {
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = () => {
                setMatches(media.matches);
            };
            media.addListener(listener);
            return () => media.removeListener(listener);
        }, [matches, query]);

        return matches;
    }

    let isPageWide = useBigLogo("(min-width: 1000px)");
    
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(prev => !prev);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            {isPageWide ? <Logo type="dark" className="logo" /> : <Logo type="horizontal" className="logo" />}
            <nav className="navbar">
                <button onClick={handleToggle}>{menuOpen ? <CloseOutlined className="navbar-icon" /> : <MenuOutlined className="navbar-icon" /> }</button>
                <div className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
                    <NavLink exact to="/" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/quiz" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Quiz</NavLink>
                    <NavLink to="/leaderboard" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Leaderboard</NavLink>
                    <NavLink to="/about" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/signup" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Sign Up / Register</NavLink>
                </div>
            </nav>
        </header>
    );
};
 
export default Navbar;
