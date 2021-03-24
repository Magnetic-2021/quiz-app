// import {Link} from "react-router-dom";
import {useState} from "react";
import {MenuOutlined, CloseOutlined} from "@ant-design/icons";

const Navbar = () => {
    const [isActive, setIsActive] = useState(true);

    const clickHandler = () => setIsActive(false);
    const closeMenu = () => setIsActive(true);

    return (
        <header>
            {isActive && (
                <nav className="navbar">
                    <MenuOutlined className="menu-icon menu-icon-burger" onClick={clickHandler} />
                </nav>
            )}
            {!isActive && (
                <nav className="navbar">
                    <CloseOutlined className="menu-icon menu-icon-close" onClick={closeMenu} />
                    <div className="navbar-links">
                        <a href="#">Home</a>
                        <a href="#">Quiz</a>
                        <a href="#">Leaderboard</a>
                        <a href="#">About</a>
                        <a href="#">Sign In / Register</a>
                    </div>
                </nav>
            )}
        </header>
    );
};
 
export default Navbar;
