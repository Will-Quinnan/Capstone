import "./filters.css";
import { useEffect } from "react";

function Filters(props) {

    useEffect(function(){

        console.log(props.title);
    },
    []);
    
    function filterA(){
        console.log("hello")
    }

    return (
        <div className="filters"  onChange={filterA}>
            <h3>Filters</h3>
            
                <div className="filter-type">

                    <div className="filter"> 
                            <input
                                type="radio"
                                name="react-radio-btn"
                                value="radio1"
                            />All
                        </div>

                        <h5>Year</h5>
                        <div className="filter"> 
                            <input
                                type="radio"
                                name="react-radio-btn"
                                value="2020"
                            />2020
                        </div>
                        <div className="filter"> 
                            <input
                                type="radio"
                                name="react-radio-btn"
                                value="2021"
                            />2021
                        </div>
                    {/* add filter type here such as price or color */}
                        {/* add selectable filters here. customer should be able to select multiple filters */}
                </div>

                <div className="filter-type">
                    <h5>Make</h5>
                    
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Ford"
                        />Ford
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Toyota"
                        />Toyota
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Nissan"
                        />Nissan
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Chevrolet"
                        />Chevrolet
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Jeep"
                        />Jeep
                    </div>
                    {/* add filter type here such as price or color */}
                        {/* add selectable filters here. customer should be able to select multiple filters */}
                </div>

                <div className="filter-type">
                    <h5>Seats</h5>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="5"
                        />5
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="7"
                        />7
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="8"
                        />8
                    </div>
                    {/* add filter type here such as price or color */}
                        {/* add selectable filters here. customer should be able to select multiple filters */}
                </div>

        </div>
        )
}

export default Filters;