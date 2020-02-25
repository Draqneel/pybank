import {HTTP} from './common'

export const Branch = {
  create (config) {
    return HTTP.post('/branch/', config).then(response => {
      return response.data
    })
  },
  delete (branch) {
    return HTTP.delete('/branch/${branch.id}/')
  },
  list () {
    return HTTP.get('/branch/').then(response => {
      return response.data
    })
  }
}

/* eslint-disable */
