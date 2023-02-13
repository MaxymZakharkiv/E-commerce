import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000'

const http = axios.create({
  baseURL: BASE_URL,
})

http.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return config
})

export default http
