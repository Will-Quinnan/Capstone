import axios from "axios";

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
    {
        "make": "Toyota",
        "model": "Corolla",
        "year": "2021",
        "color": "white",
        "drive": "4-wheel drive",
        "seats": 5,
        "image": "corolla-super-white.png",
        "price": 59.99
    },
    {
        "make": "Nissan",
        "model": "Versa",
        "year": "2020",
        "color": "gray",
        "drive": "manual",
        "seats": 5,
        "image": "2020 nissan versa.webp",
        "price": 39.99
    },
    {
        "make": "Nissan",
        "model": "NV350 Urvan",
        "year": "2021",
        "color": "white",
        "drive": "manual",
        "seats": 8,
        "image": "nissan urvan 2021.jpg",
        "price": 99.99
    },
    {
        "make": "Toyota",
        "model": "Sequoia",
        "year": "2020",
        "color": "black",
        "drive": "4-wheel drive",
        "seats": 8,
        "image": "2020 toyota sequoia.webp",
        "price": 109.99
    },
    {
        "make": "Chevrolet",
        "model": "Cruze",
        "year": "2020",
        "color": "gray",
        "drive": "4-wheel drive",
        "seats": 5,
        "image": "2020 chevrolet cruze.jpg",
        "price": 49.99
    },
    {
        "make": "Jeep",
        "model": "Wrangler",
        "year": "2020",
        "color": "gray",
        "drive": "4X4",
        "seats": 5,
        "image": "2020 jeep wrangler.webp",
        "price": 89.99
    },
    {
        "make": "Volkswagen",
        "model": "Jetta",
        "year": "2020",
        "color": "white",
        "drive": "4-wheel drive",
        "seats": 5,
        "image": "2020 volkswagen jetta.jpg",
        "price": 54.99
    },
    {
        "make": "Toyota",
        "model": "Yaris",
        "year": "2021",
        "color": "gray",
        "drive": "manual",
        "seats": 5,
        "image": "2021 toyota yaris.jpg",
        "price": 54.99
    },
    {
        "make": "Chevrolet",
        "model": "Malibu",
        "year": "2020",
        "color": "gray",
        "drive": "4-whee drive",
        "seats": 5,
        "image": "2020 chevrolet malibu.webp",
        "price": 59.99
    },
    {
        "make": "Toyota",
        "model": "Tacoma",
        "year": "2020",
        "color": "black",
        "drive": "4-whee drive",
        "seats": 5,
        "image": "2020 toyota tacoma.jpg",
        "price": 79.99
    }, 
    {
        "make": "Nissan",
        "model": "Frontier",
        "year": "2020",
        "color": "orange",
        "drive": "4-whee drive",
        "seats": 5,
        "image": "2020 nissan frontier.jpg",
        "price": 59.99
    },           

];

class DataService {

    async getProducts(){
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");

        return response.data;

        // return catalog;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }

    async saveOrder(order) {
        let response = await axios.post("http://127.0.0.1:5000/api/order", order);
        return response.data;
    }

    async getOrders(name, email) {
        let user = {
            name: name,
            email: email
        }
        let response = await axios.post("http://127.0.0.1:5000/api/retrieve_orders",user);        
        return response.data;
    }
}


export default DataService;