import "./header.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Heading(){

    function homepage(){
        console.log("Home clicked");
    }

    function manageBooking(){
        console.log("Manage clicked");
    }

    return (
        <div className="header">
            <div className="buttons">
                <button className="btn" onClick={homepage}>Rentalcars.com</button>
                <button className="btn btn-success" onClick={manageBooking}>Manage booking</button>
            </div>
            {/* <div>
                <Link className="btn btn-success" to="/login">Manage booking</Link>
            </div> */}
        </div>
    );
}

export default Heading;