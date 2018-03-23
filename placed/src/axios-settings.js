import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://placed-248bb.firebaseio.com/'
});

export default instance;
