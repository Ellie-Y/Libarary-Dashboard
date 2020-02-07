import axios from 'axios'

let newAxios = require('axios');
const baseURL = 'http://127.0.0.1:3000';

function apiAxios(method, url, data, response) {
  //params is passed in url，data is passed through body
  newAxios({
    method: method,
    url: url,
    data: data || null,
    params: method === 'GET' ? data : null,
    baseURL
  })
  .then(function(res) {
    response(res);
  })
  .catch(function(error) {
    response(error);
  })
}

export default {
  get(url, data, response) {
    return apiAxios('GET', url, data, response)
  },
  post(url, data, response) {
    return apiAxios('POST', url, data, response)
  },
  put(url, data, response) {
    return apiAxios('PUT', url, data, response)
  },
  delete(url, data, response) {
    return apiAxios('DELETE', url, data, response)
  },
}
