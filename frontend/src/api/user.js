import {HTTP} from './common'

export const User = {
  create (config) {
    return HTTP.post('/user/', config).then(response => {
      return response.data
    })
  },
  delete (user) {
    return HTTP.delete(`/user/${user.id}/`)
  },
  list () {
    return HTTP.get('/user/').then(response => {
      return response.data
    })
  }
}
