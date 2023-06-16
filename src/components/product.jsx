import { useEffect } from "react";
import "./product.css"
import { Link } from "react-router-dom";


function Product(props) {

    useEffect(function(){

        console.log(props.title);
    },
    []);
    
    return(
    <div className='product'>
        
        
        <h5>{props.data.year} {props.data.make} {props.data.model}</h5>
        
        <div className="info">
            
            <div>
                <img src={"/images/"+ props.data.image} alt="car" />
            </div>

            <div>
                <h5>This vehicle  has a {props.data.drive} and {props.data.seats} seats.</h5>
                
                <h4>${props.data.price} per day</h4>
            </div>

        </div>

        <div className="viewDeal">
        <Link className="btn btn-secondary button-booking" to="/checkout">View Deal</Link>
        </div>
    </div>


    
    )
}

export default Product;