<template>
  <div>
      <h1>Register</h1>
      <input type="email" name="email" placeholder="Email" v-model="email">
      <br>
      <input type="password" name="password" placeholder="Password" v-model="password">
      <br>
      <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            console.log('Register was clicked', this.email, this.password);
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
