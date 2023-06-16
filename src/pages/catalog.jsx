import { useEffect, useState } from "react";
import TripInfo from "../components/trip-info";
import './catalog.css';
import Product from "../components/product";
import DataService from "../sevices/dataServiceTest";
import Filters from "../components/filters";


function Catalog(){
    const [products, setProducts] = useState([]);

    useEffect(function() {
        console.log("component loaded");
        loadCatalog();
    },[]);


    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }

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
                            <Filters></Filters>
                    </div>
                </div>


                <div className="catalog-products">
                    

                    <div className="sort-by">
                    {/* add a toggle function that allows the user to sort the vehicals by price high to low, or low to high */}
                    <h3>sort by</h3>
                    </div>

                    <div className="import-product">

                        {products.map( p => <Product data={p}></Product>)}
                    {/* import products to this location */}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Catalog;