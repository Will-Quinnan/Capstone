import { useContext } from 'react';
import './yourOrders.css'
import StoreContext from '../store/storeContext';

function YourOrder(){
    const car = useContext(StoreContext).car;
    const searchInfo = useContext(StoreContext).searchInfo;

    return(
        <div>
            <h1>Your order is here</h1>

            <div className='carImage'>
                <img src={"/images/"+ car.data.image} alt="" />
            </div>

            <div className='carSpecs'>
                <h3>Drive: {car.data.drive}</h3>
                <h3>Make: {car.data.make}</h3>
                <h3>Model: {car.data.model}</h3>
                <h3>Year: {car.data.year}</h3>
                <h3>Seats: {car.data.seats}</h3>
                <h3>Color: {car.data.color}</h3>
            </div>

            <div className='info'>
                <h3>Pick-Up Location: {searchInfo.pUpLocation}</h3>
                <h3>Date Pick-Up{searchInfo.pUpDate}</h3>
                <h3>Time Pick-Up{searchInfo.pUpTime}</h3>
                <h3>Drop-Off Location: {searchInfo.dOffLocation}</h3>
                <h3>Date Drop-Off: {searchInfo.dOffDate}</h3>
                <h3>Time Drop-Off: {searchInfo.dOffTime}</h3>
            </div>


        </div>
    );
}

export default YourOrder;