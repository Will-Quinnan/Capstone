import { Link } from "react-router-dom";

function Heading(){

    return (
        <div className="header">
            <div>
                <h2>Rentalcars.com</h2>
            </div>
            <div>
                <Link className="btn btn-success" to="/login">Manage booking</Link>
            </div>
        </div>
    );
}

export default Heading;