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
            <p>Fill in your details to confirm a quote or to view change.</p>
            
            <div className="form-floating mb-3 name">
                <input class="form-control form-control-lg" type="text" placeholder="Name here"/>
                <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3 email">
                <input class="form-control form-control-lg" type="email" placeholder="Email here"/>
                <label htmlFor="floatingInput">Email</label>
            </div>  

            <nav>

                <Link className="btn btn-secondary button-booking" to="/yourOrders">Find your booking</Link>
            </nav>

        </div>

    </div>
    );
}

export default Login;