import axios from "axios";

const instance = axios.create({
    baseURL: 'https://perturbator-001-site1.anytempurl.com/api/'
});

export default instance;