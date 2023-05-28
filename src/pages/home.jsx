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
            <input class="sep form-control form-control-lg" type="text" placeholder="Pick-up location"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Pick-up date"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Time"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Drop-off date"/>
            <input class="sep form-control form-control-lg" type="text" placeholder="Time"/>
            

            {/* adding link for navigation until search funtionality is implimented */}
            <Link className="btn btn-success" to="/catalog">Search</Link>
        </div>

    </div>
    );
}

export default Home