<template>
  <div>
    <h1 class="title has-text-centered hero">Register</h1>
    <div class="box">
      <div class="columns inputColumn">
        <h2>Email</h2>
        <input class="input" type="text" v-model="email" placeholder="catslayer994@dogs.com">
      </div>
      <div class="columns inputColumn">
        <h2 class>Password</h2>
        <input class="input" type="text" v-model="password" placeholder="123password">
      </div>
      <div class="columns inputColumn">
        <a class="button is-rounded is-success" @click="createUser($swal, $router)">Register</a>
        <nuxt-link to="/login" class="button is-rounded is-primary">Login</nuxt-link>
        <nuxt-link to="/" class="button is-rounded is-primary">Home</nuxt-link>
      </div>
    </div>
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
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.$swal({
          type: "error",
          title: "Sorry :(",
          text: "Your already logged in!"
        });
        this.$router.push({ name: "index" });
      }
    });
  },
  methods: {
    createUser(swal, router) {
      this.$fireAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            let userData = user.user;
            console.log(userData);
            swal({
              type: "success",
              title: "WoooHoo!",
              text: `Your account has been created with ${userData.email}!`
            });
            router.push({ name: "index" });
          },
          function(err) {
            swal({
              type: "error",
              title: ":/",
              text:
                "The email you enter may be in use or your password is not long enough!"
            });
          }
        );
    }
  }
};
</script>

<style scoped>
title {
  padding: 5px;
}
.inputColumn {
  padding: 10px;
}
.inputColumn > * {
  margin: auto;
}
.inputColumn > h2 {
  padding-right: 10px;
}
</style>