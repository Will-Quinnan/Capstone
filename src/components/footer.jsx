import { Link } from "react-router-dom";
import './footer.css';

function Footer(){

    return (
        // links and pages need to be made for "privacy", "Terms of Service", "About us", "help"
        <div className="footer">
            <nav>
                <Link className="navbar-brand me-5" to="/privacy">Privacy</Link>
                <Link className="navbar-brand me-5" to="/terms">Terms of service</Link>
                <Link className="navbar-brand me-5" to="/about">About us</Link>
                <Link className="navbar-brand me-5" to="/help">Help</Link>
            </nav>
        </div>
    );
}

export default Footer;