import Vue from 'vue'
import Router from 'vue-router'
import ListUser from '../components/ListUser'
import CreateUser from '../components/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users/',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/users/set',
      name: 'CreateUser',
      component: CreateUser
    }
  ]
})
