import {HTTP} from './common'


export const Transaction = {
  create (config) {
    return HTTP.post('/transaction/', config).then(response => {
      return response.data
    })
  },
  delete (transaction) {
    return HTTP.delete('/transaction/${transaction.id}/')
  },
  list () {
    return HTTP.get('/transaction/').then(response => {
      return response.data
    })
  }
}

/* eslint-disable */
