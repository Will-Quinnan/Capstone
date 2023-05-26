
function TripInfo(){

    return (
        <div className="trip-info">

            <div>
                <h5>Pick up</h5>
                

                <div class="mb-3">
                    <label class="form-label">Pick Up Date:</label>
                    <input type="date" id="pickup" name="pickup"></input>
                </div>

                <div class="mb-3">
                    <label class="form-label">Pick Up location:</label>
                        <select class="form-control" id="textService">
                            <option value="" disabled selected>--Select location--</option>
                            <option value="la">Las Angelas</option>
                            <option value="sd">San Diego</option>
                            
                        </select>
                </div>
            </div>    

            <div>
                <h5>Drop off</h5>
                
                <div class="mb-3">
                    <label class="form-label">Drop Off Date:</label>
                    <input type="date" id="dropoff" name="dropoff"></input>
                </div>

                <div class="mb-3">
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