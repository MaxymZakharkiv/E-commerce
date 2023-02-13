import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000'

const http = axios.create({
  baseURL: BASE_URL,
})

export default http
