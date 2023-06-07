import axios from 'axios';

var catalog = [
    {
        "make": "Ford",
        "model": "Explorer",
        "year": "2020",
        "color": "gray",
        "drive": "4-wheel drive",
        "seats": 7,
        "image": "2020 ford explorer.webp",
        "price": 103.99
    },

];

class DataService {

    getProducts(){
        // let response = await axios.get("http://127.0.0.1:5000/api/catalog");

        // return response.data;

        return catalog;
    }

    // async saveProduct(product) {
    //     let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    //     return response.data;
    // }

}


export default DataService;