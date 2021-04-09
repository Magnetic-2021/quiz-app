import { Link } from "react-router-dom";
import "./NotFound.css";
import orangebomb from "../../images/orangebomb.svg";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container-404">
        <div className="number-4">4</div>
        <div className="orangebomblogo">
          <img src={orangebomb} alt="orange bomb" width="110px" />
        </div>
        <div className="number-4">4</div>
      </div>

      <div className="not-found-text">
        <p>Sorry this page cannot be found.</p>

        <Link to="/">
          Click here to go back to homepage...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
