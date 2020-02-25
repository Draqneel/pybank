<template lang="pug">
  #app
    .card(v-for="user in users")
      .card-header
        button.btn.btn-clear.float-right(@click="deleteUser(user)")
        .card-title {{ user.username }}
        .card-subtitle {{ user.role }}
      .card-body {{ user.date_joined }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'user-list',
  computed: mapGetters(['users']),
  methods: {
    deleteUser (user) {
      this.$store.dispatch('deleteUser', user)
    }
  },
  beforeMount () {
    this.$store.dispatch('getUsers')
  }
}
</script>
<style>
  header {
    margin-top: 50px;
  }
</style>

