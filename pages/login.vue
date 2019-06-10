<template>
  <div class="container">
    <h1>Register</h1>

    <input class="input" type="text" placeholder="Email" v-model="email">
    <input class="input" type="text" placeholder="Password" v-model="password">
    <a class="button" @click="loginUser">Register</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async loginUser() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>

