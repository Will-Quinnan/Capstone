import { Link } from "react-router-dom";
import './login.css'

function Login() {

    return (
    <div className = "row align-items-center  login">

        <div className="col login-image">
            <img src="images/login.jpg" className="img-fluid" alt="" />
        </div>


        <div className="col border border-secondary border-2 rounded login-section">

            <h1>Manage my booking</h1>
            <p>Fill in your details to confirm a quote- or to view change or cancel a booking</p>
            
            <div className="email">
                <h4>Email</h4>
                <input class="form-control form-control-lg" type="email" placeholder="Email here"/>
            </div>

            <div className="booking-number">
                <h4>Booking reference number</h4>
                <input class="form-control form-control-lg" type="number" placeholder="Booking number"/>
            </div>  

            <nav>
                {/* adding link for navigation until book funtionality is implimented */}
                <Link className="btn btn-secondary button-booking" to="/yourOrders">Find your booking</Link>
            </nav>

        </div>

    </div>
    );
}

export default Login;