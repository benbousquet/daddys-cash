<template>
  <div class="box">
    <h2 class="subtitle is-3">
      Welcome back
      <b>{{user.email}}</b>
      <Balance/>
    </h2>
    <LogoutButton/>
  </div>
</template>

<script>
import Balance from "~/components/index/Balance";

export default {
  components: {
    Balance
  },
  data() {
    return {
      user: [],
      loggedIn: false
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
        this.user = user;
      } else {
        this.$swal({
          type: "error",
          title: "Opps your not logged in",
          text: "Login to access this page"
        });
        this.$router.push({ name: "index" });
      }
    });
  }
};
</script>