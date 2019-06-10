<template>
  <div class="container">
    <h1>Register</h1>

    <input class="input" type="text" placeholder="Email" v-model="email">
    <input class="input" type="text" placeholder="Password" v-model="password">
    <a class="button" @click="createUser">Register</a>
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
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
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

