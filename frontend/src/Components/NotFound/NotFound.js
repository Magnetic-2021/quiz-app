import {Link} from "react-router-dom";
import "./NotFound.css"; 
import orangebomb from "../../images/orangebomb.svg";
//import redbomb from "../../images/redbomb.svg";

const NotFound = () => {

    return ( 
        <div className="not-found-page">

            <div className="notfoundcontainer1"> 
            <div className="notFoundtitle-cont"> 
            <div className="notFound title1">4</div>
            <div className="orangebomblogo"> 
            <img src={orangebomb} alt="orangebomb" width="110px"/>
            </div>
            <div className="notFound title2">4</div>
            </div>
            </div>

            <div className="notfoundcontainer 2">
            <h3 className="subtitle">Sorry this page cannot be found.</h3>
            </div>
          
            <div className="notfoundcontainer 3">              
            <Link to="/" className="subtitle">Back to homepage...</Link>
            </div> 
            
        </div>
    );
};

export default NotFound;