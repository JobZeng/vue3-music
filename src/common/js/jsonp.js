import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  // 第一个有无？则加一个？，有？则加一个&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  // 关于promise的具体用法自行百度
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  // 去除第一&
  return url ? url.substring(1) : ''
}
