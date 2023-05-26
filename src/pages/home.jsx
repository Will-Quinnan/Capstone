import { Link } from "react-router-dom";
import "./home.css";

function Home() {

    return (
    <div className = "home">

        <div className="site-info">
            <h1>Car Rental - Search, Compare & Book</h1>
            <h4>Free cancelation</h4>
            <h4>Customer support</h4>
        </div>


        <div className="container">
            {/* needs 5 input fields and a search button */}
            <input class="sep form-control form-control-lg" type="text" placeholder="Pick-up location"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Pick-up date"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Time"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Drop-off date"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Time"/>
            <button className="sep btn btn-success">Search</button>
        </div>

    </div>
    );
}

export default Home