import axios from 'axios'
// import { getCookie } from "../assets/helper";
import { baseUrl } from './constants.js'
import { getCookie } from 'cookies-next'

const Server = axios.create({
  baseURL: baseUrl,
  headers: {
    common: {
      Authorization: `BEARER ${getCookie('token')}`,
    },
  },
})

Server.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

Server.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // alert('ERROR ' + error.response.data.message)
    // return Promise.reject(error)
    return false
  }
)

export default Server
