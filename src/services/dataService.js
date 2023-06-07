import axios from 'axios';


class DataService{
    async getProducts(){
        let response = await axios.get("http://127.0.0.1:5000/catalog");
        console.log(response.data);
        return response.data;
    }
}

export default DataService;