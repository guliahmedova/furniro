import axios from "axios";

const instance = axios.create({
    baseURL: 'https://csoftprojects.com/api/'
});

export default instance;