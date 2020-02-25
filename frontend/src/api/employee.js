import {HTTP} from './common'


export const Employee = {
  create (config) {
    return HTTP.post('/employee/', config).then(response => {
      return response.data
    })
  },
  delete (employee) {
    return HTTP.delete('/employee/${employee.id}/')
  },
  list () {
    return HTTP.get('/employee/').then(response => {
      return response.data
    })
  }
}

/* eslint-disable */
