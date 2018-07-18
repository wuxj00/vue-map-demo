import axios from 'axios';

axios.defaults.baseURL = process.env.BASER_URL;

export default axios;
