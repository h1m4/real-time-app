import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

require("firebase/firestore");
  var config = {
    apiKey: "AIzaSyDaEF-xPWWByMr6pX2yf59bHpXrk6WNYsA",
    authDomain: "real-time-chat-ka.firebaseapp.com",
    databaseURL: "https://real-time-chat-ka.firebaseio.com",
    projectId: "real-time-chat-ka",
    storageBucket: "real-time-chat-ka.appspot.com",
    messagingSenderId: "1052212858254"
  };
  firebase.initializeApp(config);


  var db = firebase.firestore();
  window.db = db;

  db.settings({
    
  });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
