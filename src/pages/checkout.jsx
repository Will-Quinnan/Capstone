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


    function tripDuration(){

    };

    function priceCalc(){

    };

    function insurCalc(){

    };

    function taxCalc(){

    };

    function totalPrice(){

    };
    
    

    return (
        <div className="checkout">
            <div className="product-box">
            <div className="vehical-image">
                {/* add image here of selected product */}
                <img src={"/images/"+ car.data.image} alt="car" />
            </div>

            <div className="vehical-description">
                {/* add selected product description and name here */}
                <div>
                    <h3>Product info:</h3>
                </div>

                <div className="sections">
                <div className="section">
                    <div className="info">
                        <h5>Year:</h5> <p>{car.data.year}</p>
                    </div>
                    <div className="info">
                        <h5>Make:</h5> <p>{car.data.make}</p>
                    </div>
                    <div className="info">
                        <h5>Model:</h5> <p>{car.data.model}</p>
                    </div>

                </div>
                <div className="section">
                    <div className="info">
                        <h5>Drive:</h5> <p>{car.data.drive}</p>
                    </div>
                    <div className="info">
                        <h5>Seats:</h5> <p>{car.data.seats}</p>
                    </div>
                    <div className="info">
                        <h5>Color:</h5> <p>{car.data.color}</p>
                    </div>
                    <div className="info">
                        <h5>Price:</h5> <p>${car.data.price} a day</p>
                    </div>
                </div>
                </div>



            </div>
            </div>


            <div className="order-info">


                <div className="price-box">
                    <div className="outer-layer">
                        <h3>Pay on Pickup</h3>
                    </div>

                    <div className="price-breakdown">
                        <div className="info-price">
                        <p><u>Price for # days:</u> ${car.data.price}</p>
                        </div>
                        <div className="info-price">
                        <p><u>Insurance fees:</u> $###</p>
                        </div>
                        <div className="info-price">
                        <p><u>tax:</u> $###</p>
                        </div>
                    </div>

                    <div className="outer-layer">
                        <h3>Total Price:</h3> 
                        <p>$###</p>
                        {/* add total price of order */}
                    </div>

                </div>


                <div className="form-floating mb-4 mt-4 ps-1 pe-2 name">
                    <input className="form-control" type="text" onChange={e => setUser({...user, name: e.target.value})} placeholder="Name here" />
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-4 mt-4 ps-1 pe-2 email">
                    <input className="form-control" type="email" onChange={e => setUser({...user, email: e.target.value})} placeholder="Email here" />
                    <label htmlFor="floatingInput">Email</label>
                </div>


                <div className="button">
                    {/* add place reservation button here */}
                    <Link className="btn btn-success sep p-3" to="/" onClick={email}>Place order</Link>
                </div>

            </div>
        </div>

    )
}

export default Checkout;