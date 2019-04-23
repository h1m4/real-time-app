<template>
    <div>
        <h3>
            Please Login to Continue~!!
        </h3>

        <button @click = "login">Login with Google</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    methods:{
        login(){
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

            firebase.auth().signInWithPopup(provider).then(result => {
                var token = result.credential.accessToken;
                var user = result.user;

                this.$router.push('/')
                }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
        }
    }
}
</script>
