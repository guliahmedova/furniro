import axios from "axios";

const instance = axios.create({
    baseURL: 'https://immutable858-001-site1.atempurl.com/api'
});

export default instance;