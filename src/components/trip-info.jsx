import { useContext, useState } from 'react';
import './trip-info.css';
import StoreContext from '../store/storeContext';


function TripInfo(){
    const searchInfo = useContext(StoreContext).searchInfo;
    const [pLocation, setPLocation] = useState(searchInfo.pUpLocation);
    const [dLocation, setDLocation] = useState(searchInfo.dOffLocation);
    const [pDate , setPDate] = useState(searchInfo.pUpDate);
    const [dDate , setDDate] = useState(searchInfo.dOffDate);


    return (
        <div className="trip-info">

            <div className='text-align-center'>
                <h3>Modify</h3>
            </div>

            <div className="pick-up">
                

                <div className="trip-date">
                    <input value={pDate} onChange={e => setPDate(e.target.value)} type="date" id="pickup" name="pickup"></input>
                </div>

                <div className="trip-location">
                    <label className="form-label">Pick Up location:</label>
                        <select value={pLocation} onChange={e => setPLocation(e.target.value)} className="form-control" id="textService">
                            <option selected disabled value="">Pick-up location</option>
                            <option value="Dealership">Dealership</option>
                            <option value="San Diego Airport">San Diego Airport</option>                        
                        </select>
                </div>
            </div>    

            <div className="pick-up">
            
                
                <div className="trip-date">
                    <input value={dDate} onChange={e => setDDate(e.target.value)} type="date" id="dropoff" name="dropoff"></input>
                </div>

                <div className="trip-location">
                    <label className="form-label">Drop off location:</label>
                        <select value={dLocation} onChange={e => setDLocation(e.target.value)} className="form-control" id="textService">
                            <option selected disabled value="">Drop-off location</option>
                            <option value="Dealership">Dealership</option>
                            <option value="San Diego Airport">San Diego Airport</option>
                        </select>
                </div>
            </div>

        </div>
    );
}

export default TripInfo;