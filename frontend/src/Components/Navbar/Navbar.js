import {useState} from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

import Logo from "../Logo/Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(prev => !prev);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <Logo type="horizontal" className="app-logo" />
            <button onClick={handleToggle}>{menuOpen ? <CloseOutlined className="navbar-icon" /> : <MenuOutlined className="navbar-icon" /> }</button>
            <div className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
                <NavLink exact to="/" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/quiz" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Quiz</NavLink>
                <NavLink to="/leaderboard" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Leaderboard</NavLink>
                <NavLink to="/about" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>About</NavLink>
                <NavLink to="/signup" className="navbar-item" activeClassName="navbar-selected" onClick={closeMenu}>Sign Up / Register</NavLink>
            </div>
        </nav>
    );
};
 
export default Navbar;
