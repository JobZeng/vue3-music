// 导入封装好的jsonp方法
import jsonp from 'common/js/jsonp'
// 导入自己写好的一些公共配置
import { commonParams, options } from './config'
import axios from 'axios'

// 获取banner图
export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  
    const data = Object.assign({}, commonParams, {
      platform: 'h5',
      uin: 0,
      needNewCode: 1
    })
  
    return jsonp(url, data, options)
}

// 获取歌单
export function getDiscList() {
    // 线上环境地址，同学们根据自己的需要配置修改
    // const url = debug ? '/api/getDiscList' : 'http://localhost:8080/api/getDiscList'
    const url = '/api'
  
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
  
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }
  