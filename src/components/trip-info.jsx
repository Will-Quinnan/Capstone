import './trip-info.css';

function TripInfo(){

    return (
        <div className="trip-info">

            <div className="pick-up">
                

                <div className="trip-date">
                    <input type="date" id="pickup" name="pickup"></input>
                </div>

                <div className="trip-location">
                    <label className="form-label">Pick Up location:</label>
                        <select className="form-control" id="textService">
                            <option value="" disabled select>--Select location--</option>
                            <option value="la">Las Angelas</option>
                            <option value="sd">San Diego</option>
                            
                        </select>
                </div>
            </div>    

            <div className="pick-up">
            
                
                <div className="trip-date">
                    <input type="date" id="dropoff" name="dropoff"></input>
                </div>

                <div className="trip-location">
                    <label className="form-label">Drop off location:</label>
                        <select className="form-control" id="textService">
                            <option value="" disabled select>--Select location--</option>
                            <option value="la">Las Angelas</option>
                            <option value="sd">San Diego</option>
                            
                        </select>
                </div>
            </div>

        </div>
    );
}

export default TripInfo;