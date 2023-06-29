import { useContext } from 'react';
import './yourOrders.css'
import StoreContext from '../store/storeContext';

function YourOrder(){
    const car = useContext(StoreContext).car;
    const searchInfo = useContext(StoreContext).searchInfo;

    return(
        <div className='your-orders'>
            <h1>Your order is here</h1>
            <div className='row align-items-center'>
                <div className='carImage col'>
                    <img src={"/images/"+ car.data.image} className='img-fluid' alt="" />
                </div>

                <div className='carSpecs col align-items-start'>
                    <p><b>Drive:</b> {car.data.drive}</p>
                    <p><b>Make:</b> {car.data.make}</p>
                    <p><b>Model:</b> {car.data.model}</p>
                    <p><b>Year:</b> {car.data.year}</p>
                    <p><b>Seats:</b> {car.data.seats}</p>
                    <p><b>Color:</b> {car.data.color}</p>
                </div>

                <div className='info col'>
                    <p><b>Pick-Up Location:</b> {searchInfo.pUpLocation}</p>
                    <p><b>Date Pick-Up:</b> {searchInfo.pUpDate}</p>
                    <p><b>Time Pick-Up:</b> {searchInfo.pUpTime}</p>
                    <p><b>Drop-Off Location:</b> {searchInfo.dOffLocation}</p>
                    <p><b>Date Drop-Off:</b> {searchInfo.dOffDate}</p>
                    <p><b>Time Drop-Off:</b> {searchInfo.dOffTime}</p>
                </div>
            </div>


        </div>
    );
}

export default YourOrder;