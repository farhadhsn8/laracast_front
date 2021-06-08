import axios from 'axios';

export let baseUrl ='http://localhost:8000/api/';

const Axios = axios.create({
    baseURL:'${baseUrl}v1/'
});

axios.defaults.withCredentials = true;


export default Axios;