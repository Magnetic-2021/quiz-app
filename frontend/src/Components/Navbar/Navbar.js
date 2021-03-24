// import {Link} from "react-router-dom";
import {useState} from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => {
    const [isActive, setIsActive] = useState(true);

    const openMenu = () => setIsActive(false);
    const closeMenu = () => setIsActive(true);

    return (
        <header>
            {isActive && (
                <nav className="navbar">
                    <MenuOutlined className="menu-icon menu-icon-burger" onClick={openMenu} />
                </nav>
            )}
            {!isActive && (
                <nav className="navbar navbar-active">
                    <CloseOutlined className="menu-icon menu-icon-close" onClick={closeMenu} />
                    <div className="navbar-links">
                        <a href="#" className="navbar-item">Home</a>
                        <a href="#" className="navbar-item">Quiz</a>
                        <a href="#" className="navbar-item">Leaderboard</a>
                        <a href="#" className="navbar-item">About</a>
                        <a href="#" className="navbar-item">Sign In / Register</a>
                    </div>
                </nav>
            )}
        </header>
    );
};
 
export default Navbar;
