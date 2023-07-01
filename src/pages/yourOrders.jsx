import { useContext, useEffect, useState } from 'react';
import './yourOrders.css'
import StoreContext from '../store/storeContext';
import DataService from '../sevices/dataServiceTest';

function YourOrder(){
    const car = useContext(StoreContext).car;
    const searchInfo = useContext(StoreContext).searchInfo;
    const checkOut = useContext(StoreContext).checkOut;
    const [orders, setOrders] = useState([]);


    useEffect(function() {
        loadCars();
        // get the user and email from context
        // get the order using dataserviceTest
        // await for the response (an arrray with all orders)
        // set the arry to orders State Var
        

    }, []);

    async function loadCars(){
        let service = new DataService();
        let results = await service.getOrders(checkOut)
        setOrders(results);
        console.log(results);
    }


    return(
        <div className='your-orders'>
            <h1>Your order is here</h1>

            {orders.length < 1 ?
            (
                <h1>You have no orders</h1>
            )            
            :
            (

                orders.map(order =>

                    <div className='row align-items-center'>
                        <div className='carImage col'>
                            <img src={"/images/"+ order.car.image} className='img-fluid' alt="" />
                        </div>

                        <div className='carSpecs col align-items-start'>
                            <p><b>Drive:</b> {order.car.drive}</p>
                            <p><b>Make:</b> {order.car.make}</p>
                            <p><b>Model:</b> {order.car.model}</p>
                            <p><b>Year:</b> {order.car.year}</p>
                            <p><b>Seats:</b> {order.car.seats}</p>
                            <p><b>Color:</b> {order.car.color}</p>
                        </div>

                        {/* <div className='info col'>
                            <p><b>Pick-Up Location:</b> {order.pUpLocation}</p>
                            <p><b>Date Pick-Up:</b> {order.pUpDate}</p>
                            <p><b>Time Pick-Up:</b> {order.pUpTime}</p>
                            <p><b>Drop-Off Location:</b> {order.dOffLocation}</p>
                            <p><b>Date Drop-Off:</b> {order.dOffDate}</p>
                            <p><b>Time Drop-Off:</b> {order.dOffTime}</p>
                        </div> */}
                    </div>

                )
            )}


        </div>
        
    );
}


export default YourOrder;