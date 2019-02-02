import axios from 'axios'

const Util = {
    imgPath: 'http://127.0.0.1:8011/img',
    apiPath: 'http://127.0.0.1:8010/'
}

//axios通用配置
Util.axios = axios.create({
  baseURL: Util.apiPath
});

//添加响应拦截器
Util.axios.interceptors.response.use(res => {
  return res.data;
})

export default Util;
