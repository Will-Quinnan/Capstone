

function Login() {

    return (
    <div className = "login">

        <div className="login-image">
        {/* find an image to use for login */}
        </div>


        <div className="login-section">

            <h1>Manage my booking</h1>
            <p>Fill in your details to confirm a quote- or to view change or cancel a booking</p>
            
            <div className="email">
                <h4>Email</h4>
                {/* add text field to input email */}
            </div>

            <div className="booking-number">
                <h4>Booking reference number</h4>
                {/* add text field to input booking number */}
            </div>  

            <button>Find your booking</button>
            {/* add button functionality */}

        </div>

    </div>
    );
}

export default Login;