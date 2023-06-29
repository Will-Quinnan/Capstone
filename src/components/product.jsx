import { useContext, useEffect, useState } from "react";
import "./product.css"
import { Link } from "react-router-dom";
import StoreContext from "../store/storeContext";


function Product(props) {
    const carSpecs = useContext(StoreContext).carSpecs

    const Info = () => {
        carSpecs(props);
    }

    useEffect(function(){

        console.log(props.title);
    },
    []);
    
    return(
    <div className='product'>
        
        
        <h4>{props.data.year} {props.data.make} {props.data.model}</h4>
        
        <div className="info">
            
            <div>
                <img src={"/images/"+ props.data.image} className="" alt="car" />
            </div>

            <div>
                <p>This vehicle  has a {props.data.drive} and {props.data.seats} seats.</p>
                
                <div className="price" >
                    <h5 id="product-price">${props.data.price}</h5>
                    <p>per day</p>
                    </div>
                
            </div>

        </div>

        <div className="viewDeal">
            <Link className="btn btn-secondary button-booking" to="/checkout" onClick={Info}>View Deal</Link>
        </div>
    </div>


    
    )
}

export default Product;