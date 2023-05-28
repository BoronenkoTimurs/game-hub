import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '3c1c86aafa6d4370a0e19548613cc136'
    }
})