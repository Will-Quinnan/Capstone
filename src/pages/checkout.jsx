import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../store/storeContext";
import './checkout.css';



function Checkout() {
    const car = useContext(StoreContext).car;
    const userInfo = useContext(StoreContext).userInfo;
    const [user, setUser] = useState({name: "", email: "" });

    function email(){
        userInfo(user);
    };

    return (
        <div className="checkout">
            <div className="vehical-image">
                {/* add image here of selected product */}
                <img src={"/images/"+ car.data.image} alt="car" />
            </div>

            <div className="vehical-description">
                {/* add selected product description and name here */}
                <p>Drive: {car.data.drive}</p>
                <p>Make: {car.data.make}</p>
                <p>Model: {car.data.model}</p>
                <p>Year: {car.data.year}</p>
                <p>Seats: {car.data.seats}</p>
                <p>Color: {car.data.color}</p>
                <p>Price: ${car.data.price} a day</p>

            </div>

            <div className="order-info">


                <div className="price-box">
                    <div className="outer-layer">
                        <h3>Pay on Pickup</h3>
                    </div>

                    <div className="price-breakdown">
                        {/* add breakdown of product price including all fees */}
                    </div>

                    <div className="outer-layer">
                        <h3>Total Price:</h3> 
                        {/* add total price of order */}
                    </div>

                </div>


                <div className="name">
                    {/* add email text box here */}
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={e => setUser({...user, name: e.target.value})}/>
                </div>

                <div className="email">
                    {/* add email text box here */}
                    <label htmlFor="">Email:</label>
                    <input type="email" onChange={e => setUser({...user, email: e.target.value})}/>
                </div>


                <div className="button">
                    {/* add place reservation button here */}
                    <Link className="btn btn-success sep p-3" to="/" onClick={email}>Search</Link>
                </div>

            </div>
        </div>

    )
}

export default Checkout;