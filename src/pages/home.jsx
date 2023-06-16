import "./home.css";
import { Link } from 'react-router-dom'
import DataService from "../services/dataService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMagnifyingGlass, faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons'

function Home() {

    function loadCatalog(){
        let service = new DataService();
        service.getProducts();
    }

    return (
    <div className = "home">

        <div className="site-info">
            <h1>Car Rental - Search, Compare & Book</h1>
            <h4><FontAwesomeIcon icon={faCheck} /> Free cancelation</h4>
            <h4><FontAwesomeIcon icon={faCheck} /> Customer support</h4>
        </div>


        <div className="container">
            <div className="inputs">

                <div className="wrapper pb-1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input class="sep form-control form-control-lg input ps-5" type="text" placeholder="Pick-up location"/>
                </div>

                <div className="wrapper pb-1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <input class="sep form-control form-control-lg input ps-5" type="text" placeholder="Pick-up date"/>
                </div>

                <div className="wrapper pb-1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <input class="sep form-control form-control-lg input ps-5" type="text" placeholder="Time"/>
                </div>

                <div className="wrapper pb-1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <input class="sep form-control form-control-lg input ps-5" type="text" placeholder="Drop-off date"/>
                </div>

                <div className="wrapper pb-1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <input class="sep form-control form-control-lg input ps-5" type="text" placeholder="Time"/>
                </div>
                
                
                
                
            {/* Testing that react has communication with flask */}
            {/* <button className="btn btn-success sep" onClick={loadCatalog}>Search</button> */}
            
            {/* adding link for navigation until search funtionality is implimented */}
            <Link className="btn btn-success sep p-3" to="/catalog">Search</Link>
            </div>
            
        </div>

    </div>
    );
}

export default Home