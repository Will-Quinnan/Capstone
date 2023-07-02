import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../store/storeContext";
import './checkout.css';
import DataService from "../sevices/dataServiceTest";



function Checkout() {
    const car = useContext(StoreContext).car;
    const searchInfo = useContext(StoreContext).searchInfo;
    const userInfo = useContext(StoreContext).userInfo;
    const [user, setUser] = useState({name: "", email: "" });
    const [total, setTotal] = useState('');

    async function email(){
        userInfo(user);

        const order = {            
            car: car.data,
            name: user.name,
            email: user.email,
            searchInfo: searchInfo
        }

        let service = new DataService();
        let results = await service.saveOrder(order);
        console.log(results);
    };

    function daysDifference(firstDate, secondDate){
        var startDay = new Date(firstDate);
        var endDay = new Date(secondDate);
        var millisBetween = startDay.getTime() - endDay.getTime();
        var days = millisBetween / (1000 * 3600 * 24);
        return Math.round(Math.abs(days));
    }


    function tripDuration(){
        
    };

    function priceCalc(){
        let total = (daysDifference(searchInfo.pUpDate, searchInfo.dOffDate)*car.data.price); 
        return total;

    };

    function insurCalc(){
        let total = (daysDifference(searchInfo.pUpDate, searchInfo.dOffDate)*car.data.price)*.2; 
        return total;
    };

    function taxCalc(){
        let total = (priceCalc() + insurCalc())*.1;
        return total
    };

    function totalPrice(){
        let total = priceCalc() + insurCalc() + taxCalc(); 
        return total;
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
                        <p><u>Price for {daysDifference(searchInfo.pUpDate, searchInfo.dOffDate)} days:</u> ${priceCalc().toFixed(2)}</p>
                        </div>
                        <div className="info-price">
                        <p><u>Insurance fees:</u> ${insurCalc().toFixed(2)}</p>
                        </div>
                        <div className="info-price">
                        <p><u>tax:</u> ${taxCalc().toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="outer-layer">
                        <h3>Total Price:</h3> 
                        <p>${totalPrice().toFixed(2)}</p>
                        {/* add total price of order */}
                    </div>

                </div>


                <div className="form-floating mb-3 name">
                    {/* add email text box here */}
                    <input className="form-control" type="text" placeholder="Name" onChange={e => setUser({...user, name: e.target.value})}/>
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating email">
                    {/* add email text box here */}
                    <input className="form-control" type="email" placeholder="Email" onChange={e => setUser({...user, email: e.target.value})}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>


                <div className="button">
                    {/* add place reservation button here */}
                    <Link className="btn btn-success sep p-3" to="/" onClick={email}>Book</Link>
                </div>

            </div>
        </div>

    )
}

export default Checkout;