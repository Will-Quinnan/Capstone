import './trip-info.css';

function TripInfo(){

    return (
        <div className="trip-info">

            <div class="pick-up">
                

                <div class="trip-date">
                    <input type="date" id="pickup" name="pickup"></input>
                </div>

                <div class="trip-location">
                    <label class="form-label">Pick Up location:</label>
                        <select class="form-control" id="textService">
                            <option value="" disabled selected>--Select location--</option>
                            <option value="la">Las Angelas</option>
                            <option value="sd">San Diego</option>
                            
                        </select>
                </div>
            </div>    

            <div className="pick-up">
            
                
                <div class="trip-date">
                    <input type="date" id="dropoff" name="dropoff"></input>
                </div>

                <div class="trip-location">
                    <label class="form-label">Drop off location:</label>
                        <select class="form-control" id="textService">
                            <option value="" disabled selected>--Select location--</option>
                            <option value="la">Las Angelas</option>
                            <option value="sd">San Diego</option>
                            
                        </select>
                </div>
            </div>

        </div>
    );
}

export default TripInfo;