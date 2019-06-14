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
            <Balance/>
          </h2>
          <LogoutButton/>

          <SendForm/>
          <LenderList/>
          <BorrowerList/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SendForm from "~/components/index/SendForm";
import Balance from "~/components/index/Balance";
import LenderList from "~/components/index/LenderList";
import BorrowerList from "~/components/index/BorrowerList";
import LogoutButton from "~/components/auth/LogoutButton";
export default {
  components: {
    SendForm,
    Balance,
    LogoutButton,
    LenderList,
    BorrowerList
  },
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
  }
};
</script>