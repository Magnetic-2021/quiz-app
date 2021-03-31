import {Link} from "react-router-dom";
import "./NotFound.css";
import notfoundLogo from "../../images/notfoundLogo.svg";

const NotFound = () => {
    return ( 
        <div className="not-found-page">
            <div className="notfound-container"> 
            <h2 className="notFound-title">Oops! Sorry.</h2>
            <p className="notFound-subtitle">That page cannot be found.</p>
            <Link to="/" className="backtohome">Back to homepage...</Link>
            </div>

            <div className="notfoundlogo-container">
            <img src={notfoundLogo} alt="notfoundlogo" width="230px"></img>
            </div>
        </div>
    );
};

export default NotFound;