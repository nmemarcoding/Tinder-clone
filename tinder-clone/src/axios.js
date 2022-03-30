import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-1400.herokuapp.com'
})

export default instance;