// import {Link} from "react-router-dom";
import {useState} from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(prev => !prev);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <button onClick={handleToggle}>{menuOpen ? <CloseOutlined className="navbar-icon" /> : <MenuOutlined className="navbar-icon" /> }</button>
            <div className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
                <Link to="/" className="navbar-item" onClick={closeMenu}>Home</Link>
                <Link to="/quiz" className="navbar-item" onClick={closeMenu}>Quiz</Link>
                <Link to="/leaderboard" className="navbar-item" onClick={closeMenu}>Leaderboard</Link>
                <Link to="/about" className="navbar-item" onClick={closeMenu}>About</Link>
                <Link to="/signup" className="navbar-item" onClick={closeMenu}>Sign Up / Register</Link>
            </div>
        </nav>
    );
};
 
export default Navbar;
