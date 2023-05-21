import { Link } from "react-router-dom";
import "./home.css";

function Home() {

    return (
    <div className = "home">

        <div className="site-info">
            <h1>Car Rental - Search, Compare & Book</h1>
            <h6>Free cancelation</h6>
            <h6>Customer support</h6>
        </div>


        <div className="search-bar">
            {/* needs 5 input fields and a search button */}
        </div>

    </div>
    );
}

export default Home