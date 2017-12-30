<template>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex xs12 sm6>
            <v-card class="pa-3">
              <v-flex class="text-xs-center">
                    <v-avatar size="125px">
                        <img class='logo' src="~public/images/CHINGU_LOGO-04.png" alt="CodeStories logo" align="middle" />
                    </v-avatar>
                </v-flex>
                <v-btn block outline color="teal">Login with Google</v-btn>
                <v-btn block outline>Login with Github</v-btn>
                <v-btn block outline color="indigo">Login with Facebook</v-btn>
                 <v-btn block outline color="blue">Login with Twitter</v-btn>
                 <br>
                <hr>
                <br>
                <v-btn block outline color="green">Login</v-btn>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
//import {firebaseConfig} from '../util/firebaseConfig'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: {
          message: ''
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h3,.btn-style{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
}
h1{
  font-size: 65px;
  padding-top: 153px;
  font-weight: bold;
}
h3{
  font-size: 22.5px;
  font-weight: normal;
}
.btn-bg{
  background: #5FD48A;
}
.btn-style{
  font-weight: bold;
  color: #395F5C;
  margin-top: 50px;
}
</style>
