import axios from 'axios'
<<<<<<< HEAD
import urls from './URLs'

const allDetails = {
  allDetails: 'allEntities=true'
}

//配置 get请求
//axios 不能作为变量名，因为是关键字
const myAxios = axios.create({
  baseURL: urls.baseURL,
  method: 'get',
  params: {
    //参数可以选填，但是要解构
    // ...allDetails
  }
});

export default {
  getUser() {
    return myAxios({
      //导入的 urls 下的 user项
      url: urls.user,
      
    })
  }
}

=======

let newAxios = require('axios');
const baseURL = 'http://127.0.0.1:3000';

function apiAxios(method, url, data, response) {
  //params是添加在url上的，data是要给后台的数据
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
>>>>>>> final
