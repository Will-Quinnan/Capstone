
import TripInfo from "../components/trip-info";
import './catalog.css';


function Catalog(){

    return (
        <div className="catalog">

            <div className="trip-info">
                <TripInfo></TripInfo>
            </div>


            <div className="catalog-body">

                <div className="filter-tab">
                    {/* add a map that shows pickup location */}
                    <h1>Map</h1>
                    <div className="filters">
                            {/* import filters here */}
                            <h2>import filters here</h2>
                    </div>
                </div>


                <div className="catalog-products">
                    

                    <div className="sort-by">
                    {/* add a toggle function that allows the user to sort the vehicals by price high to low, or low to high */}
                    <h3>sort by</h3>
                    </div>

                    <div className="import-product">
                        <h3>import produts</h3>
                    {/* import products to this location */}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Catalog;