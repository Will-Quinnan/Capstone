import "./home.css";
import { Link } from 'react-router-dom'
import DataService from "../services/dataService";

function Home() {

    function loadCatalog(){
        let service = new DataService();
        service.getProducts();
    }

    return (
    <div className = "home">



    </div>
    );
}

export default Home