<template>
  <section>
    <div>
      <h1 class="title is-1">Daddy's Cash 💸</h1>
      <h2 class="subtitle is-2">Fast p2p loans</h2>
      <div>
        <nuxt-link
          to="/login"
          v-if="loggedIn == false"
          class="button is-rounded is-primary"
        >Login / Register</nuxt-link>
        <div v-if="loggedIn">
          <h2 class="subtitle is-3">
            Welcome back
            <b>{{user.email}}</b>
            ! Your balance is ${{user.balance}}
          </h2>
          <a class="button is-rounded is-primary" @click="logout($swal)">Logout</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      loggedIn: null
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
    logout(swal) {
      this.$fireAuth
        .signOut()
        .then(function() {
          swal({
            type: "success",
            title: "Bye 👋",
            text: "Successfully logged out!"
          });
        })
        .catch(function(err) {
          swal({ type: "error", text: "err" });
        });
    }
  }
};
</script>