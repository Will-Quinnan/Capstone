import "./filters.css";
import { useEffect } from "react";

function Filters(props) {

    useEffect(function(){

        console.log(props.title);
    },
    []);
    
    function filterYear(e){
        console.log("filterYear", e.target.value)
        props.onYearChange?.(e.target.value);
    }

    function filterMake(e){
        console.log("filterMake", e.target.value);
        props.onMakeChange?.( e.target.value);
    }

    function filterSeats(e){
        console.log("filterSeats", e.target.value);
        props.onSeatsChange?.( e.target.value);
    }

    return (
        <div className="filters" >
            <h3>Filters</h3>
            
                <div className="filter-type"  onChange={filterYear}>

                    <div className="filter"> 
                            <input
                                type="radio"
                                name="react-radio-btn"
                                value="All"
                                radioGroup="year"
                            />All
                        </div>

                        <h5>Year</h5>
                        <div className="filter"> 
                            <input
                                type="radio"
                                name="react-radio-btn"
                                value="2020"
                                radioGroup="year"
                            />2020
                        </div>
                        <div className="filter"> 
                            <input
                                type="radio"
                                name="react-radio-btn"
                                value="2021"
                                radioGroup="year"
                            />2021
                        </div>
                    {/* add filter type here such as price or color */}
                        {/* add selectable filters here. customer should be able to select multiple filters */}
                </div>

                <div className="filter-type" onChange={filterMake}>
                    <h5>Make</h5>
                    
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Ford"
                            radioGroup="make"
                        />Ford
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Toyota"
                            radioGroup="make"
                        />Toyota
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Nissan"
                            radioGroup="make"
                        />Nissan
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Chevrolet"
                            radioGroup="make"
                        />Chevrolet
                    </div>
                    <div className="filter"> 
                        <input
                            type="radio"
                            name="react-radio-btn"
                            value="Jeep"
                            radioGroup="make"
                        />Jeep
                    </div>
                    {/* add filter type here such as price or color */}
                        {/* add selectable filters here. customer should be able to select multiple filters */}
                </div>

                <div className="filter-type" onChange={filterSeats}>
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