// 判断是否在微信中打开
export const isWeixin = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  }   
  return false
}
export const queryInfoObj = () => {
  let str
  if (process.browser) {
    str = location.href 
  }
  const newStr = str.split('?').slice(1) 
  const obj = {} 
  const newObj = {} 
  function test (value) { 
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item.includes('&')) {
          test(item.split('&'))
        }
        if (item && !item.includes('&')) {
          obj[item.split('=')[0]] = item.split('=')[1]
        }
      })
    }
    return obj
  }
  test(newStr)
  for (const k in obj) { // 只保存不为'',undefined,null的键
    if (obj[k]) {
      newObj[k] = obj[k]
    }
  }
  for (const key in newObj) { // 防止之中hash 如post_id: 'ksda#index' 变为post_id: 'ksda'
    if (newObj[key].includes('#')) {
      newObj[key] = newObj[key].slice(0, newObj[key].indexOf('#'))
    }
    if (key === 'null' || key === '' || key === 'undefined') { // 删除‘’，undefined，null键
      delete newObj[key]
    }
  }
  return newObj
}
