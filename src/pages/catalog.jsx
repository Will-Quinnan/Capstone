
import TripInfo from "../components/trip-info";


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
                    <h3> {/* add code to show number of available vehicles */} at this location </h3>

                    <div className="popular filters">
                    {/* add filter butons to this location; minimum 5 */}
                    </div>

                    <div className="sort-by">
                    {/* add a toggle function that allows the user to sort the vehicals by price high to low, or low to high */}
                    </div>

                    <div className="import-product">
                    {/* import products to this location */}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Catalog;