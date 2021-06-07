import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:7070/'
})

export default axios
