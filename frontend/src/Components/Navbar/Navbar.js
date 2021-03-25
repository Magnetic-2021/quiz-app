// import {Link} from "react-router-dom";
import {useState} from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // const openMenu = () => setIsActive(false);
    // const closeMenu = () => setIsActive(true);

    const handleToggle = () => setMenuOpen(prev => !prev);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
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
            {/* {isActive && (
                <nav className="navbar">
                    <MenuOutlined className="menu-icon menu-icon-burger" onClick={openMenu} />
                </nav>
            )}
            {!isActive && (
                <nav className="navbar navbar-active">
                    <CloseOutlined className="menu-icon menu-icon-close" onClick={closeMenu} />
                    <div className="navbar-links">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/quiz" className="navbar-item">Quiz</Link>
                        <Link to="/leaderboard" className="navbar-item">Leaderboard</Link>
                        <Link to="/about" className="navbar-item">About</Link>
                        <Link to="/signup" className="navbar-item">Sign Up / Register</Link>
                    </div>
                </nav>
            )} */}
        </header>
    );
};
 
export default Navbar;
