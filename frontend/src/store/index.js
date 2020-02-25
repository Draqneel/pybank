import Vue from 'vue'
import Vuex from 'vuex'
import {User} from '../api/user'
import {Branch} from '../api/branch'
import {Employee} from '../api/employee'
import {Balance} from '../api/balance'
import {Transaction} from '../api/transaction'

Vue.use(Vuex)

import {
  ADD_USER,
  ADD_BALANCE,
  ADD_BRANCH,
  ADD_EMPLOYEE,
  ADD_TRANSACTION,

  REMOVE_USER,
  REMOVE_BALANCE,
  REMOVE_BRANCH,
  REMOVE_EMPLOYEE,
  REMOVE_TRANSACTION,

  SET_USER,
  SET_BALANCE,
  SET_BRANCH,
  SET_EMPLOYEE,
  SET_TRANSACTION
} from './mutation-types'

const state = {
  users : [],
  branches: [],
  employees: [],
  balances: [],
  transactions: []
}

const getters = {
  users: state => state.users,
  branches: state => state.branches,
  employees: state => state.employees,
  balances: state => state.balances,
  transactions: state => state.transactions
}

const mutations = {
  [ADD_USER] (state, user) {
    state.users = [user, ...state.users]
  },
  [ADD_BALANCE] (state, balance) {
    state.balances = [balance, ...state.balances]
  },
  [ADD_BRANCH] (state, branch) {
    state.branches = [branch, ...state.branches]
  },
  [ADD_EMPLOYEE] (state, employee) {
    state.employees = [employee, ...state.employees]
  },
  [ADD_TRANSACTION] (state, transaction) {
    state.transactions = [transaction, ...state.transactions]
  },

  [REMOVE_USER] (state, {id}) {
    state.users = state.users.filter(user => {
      return user.id !== id
    })
  },
  [REMOVE_BALANCE] (state, {id}) {
    state.balances = state.balances.filter(balance => {
      return balance.id !== id
    })
  },
  [REMOVE_BRANCH] (state, {id}) {
    state.branches = state.branches.filter(branch => {
      return branch.id !== id
    })
  },
  [REMOVE_EMPLOYEE] (state, {id}) {
    state.employees = state.employees.filter(employee => {
      return employee.id !== id
    })
  },
  [REMOVE_TRANSACTION] (state, {id}) {
    state.transactions = state.transactions.filter(transaction => {
      return transaction.id !== id
    })
  },

  [SET_USER] (state, {users}) {
    state.users = users
  },
  [SET_BALANCE] (state, {balances}) {
    state.balances = balances
  },
  [SET_BRANCH] (state, {branches}) {
    state.branches = branches
  },
  [SET_EMPLOYEE] (state, {employees}) {
    state.employees = employees
  },
  [SET_TRANSACTION] (state, {transactions}) {
    state.transactions = transactions
  },
}

const actions = {
  createUser ({ commit }, userData) {
    User.create(userData).then(user => {
      commit(ADD_USER, user)
    })
  },

  deleteUser ({ commit }, user) {
    User.delete(user).then(response => {
      commit(REMOVE_USER, user)
    })
  },
  getUsers ({ commit }) {
    User.list().then(users => {
      commit(SET_USER, { users })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

/* eslint-disable */
