<template lang="pug">
  form.form-horizontal(@submit="submitForm")
    .form-group
      .col-3
        label.form-label Role
      .col-9
        input.form-input(type="text" v-model="role" placeholder="Type BASE_ROLE or EMPLOYEE_ROLE")
    .form-group
      .col-3
        label.form-label Username
      .col-9
        input.form-input(type="text" v-model="username" placeholder="Type your username...")
    .form-group
      .col-3
      .col-9
        button.btn.btn-primary(type="submit") Create
</template>
<script>
export default {
  name: 'create-user',
  data () {
    return {
      'role': '',
      'username': ''
    }
  },
  methods: {
    submitForm (event) {
      this.createUser()
      this.role = ''
      this.username = ''
      event.preventDefault()
    },
    createUser () {
      this.$store.dispatch('createUser', { role: this.role, username: this.username })
    }
  }
}
</script>

