import { Link } from "react-router-dom";
import './footer.css';

function Footer(){

    function privacy(){
        console.log("Privacy button");
    }

    function terms(){
        console.log("Terms of service button");
    }

    function aboutUs(){
        console.log("About us button");
    }

    function help(){
        console.log("Help button");
    }

    return (
        // links and pages need to be made for "privacy", "Terms of Service", "About us", "help"
        <div className="footer">
            <div className="buttons">
                <button className="btn" onClick={privacy}>Privacy</button>
                <button className="btn" onClick={terms}>Terms of service</button>
                <button className="btn" onClick={aboutUs}>About us</button>
                <button className="btn" onClick={help}>Help</button>
            </div>
        </div>
    );
}

export default Footer;