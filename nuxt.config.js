import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    "@nuxtjs/pwa",
    "nuxt-fire",
    "vue-sweetalert2/nuxt"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  //Nuxt-Fire Module Options
  fire: {
    useOnly: [
      "auth",
      "firestore",
      "functions",
      "storage",
      "realtimeDb",
      "messaging"
    ],
    customEnv: false,
    functionsLocation: "us-central1",
    config: {
      development: {
        apiKey: "AIzaSyAFW5JjAP9l6TVl1sr1FnspjdA9fYQe2oQ",
        authDomain: "daddys-cash-f8908.firebaseapp.com",
        databaseURL: "https://daddys-cash-f8908.firebaseio.com",
        projectId: "daddys-cash-f8908",
        storageBucket: "daddys-cash-f8908.appspot.com",
        messagingSenderId: "765092853452"
      },
      production: {
        apiKey: "AIzaSyAFW5JjAP9l6TVl1sr1FnspjdA9fYQe2oQ",
        authDomain: "daddys-cash-f8908.firebaseapp.com",
        databaseURL: "https://daddys-cash-f8908.firebaseio.com",
        projectId: "daddys-cash-f8908",
        storageBucket: "daddys-cash-f8908.appspot.com",
        messagingSenderId: "765092853452"
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
