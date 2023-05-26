import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./header.css";

function Heading(){

    return (
        <div className="header">
            <nav>
                <Link className="btn" to="/">Rentalcars.com</Link>
                <Link className="btn btn-success" to="/login">Manage booking</Link>
            </nav>
        </div>
    );
}

export default Heading;