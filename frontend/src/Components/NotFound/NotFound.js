import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found-page">
            <h2>Oops! Sorry.</h2>
            <p>That page cannot be found.</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
};
 
export default NotFound;