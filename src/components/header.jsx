import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./header.css";

function Heading(){

    return (
        <div className="header">
            <nav>
                <Link className="navbar-brand logo pe-5 me-5" to="/">Rentalcars.com</Link>
                <Link className="btn btn-success ms-5" to="/login">Manage booking</Link>
            </nav>
        </div>
    );
}

export default Heading;