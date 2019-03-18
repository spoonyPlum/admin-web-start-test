import request from '@/utils/request'

export function login(username,password) {
  let param = new URLSearchParams();
  param.append("userName",username)
  param.append("pwd",password)
  return request({
      url:'/user/login',
      method:'post',
      data:param
  })
}
export  function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

