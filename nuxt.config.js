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
    "nuxt-fire"
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
        apiKey: "AIzaSyAlReVc_oN_FBmkvXtMBEP3Mu9Fi-jrKYM",
        authDomain: "daddys-cash-b5e51.firebaseapp.com",
        databaseURL: "https://daddys-cash-b5e51.firebaseio.com",
        projectId: "daddys-cash-b5e51",
        storageBucket: "daddys-cash-b5e51.appspot.com",
        messagingSenderId: "5465644636"
      },
      production: {
        apiKey: "AIzaSyAlReVc_oN_FBmkvXtMBEP3Mu9Fi-jrKYM",
        authDomain: "daddys-cash-b5e51.firebaseapp.com",
        databaseURL: "https://daddys-cash-b5e51.firebaseio.com",
        projectId: "daddys-cash-b5e51",
        storageBucket: "daddys-cash-b5e51.appspot.com",
        messagingSenderId: "5465644636"
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
