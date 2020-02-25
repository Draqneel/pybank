import {HTTP} from './common'

export const Balance = {
  create (config) {
    return HTTP.post('/balance/', config).then(response => {
      return response.data
    })
  },
  delete (balance) {
    return HTTP.delete('/balance/${balance.id}/')
  },
  list () {
    return HTTP.get('/balance/').then(response => {
      return response.data
    })
  }
}

/* eslint-disable */
