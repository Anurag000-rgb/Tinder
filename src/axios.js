import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://tinder-backend-9454.herokuapp.com',
}) 


export default instance;