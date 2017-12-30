<template>
<v-container>
    <v-toolbar color="green">
      <v-toolbar-title class="white--text">Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
           <v-form v-model="valid">
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
     <v-text-field
      label="Password"
      v-model="password"
      type="password"
      required
    ></v-text-field>
    <v-btn block>
      Login
    </v-btn>
    <v-btn block>
      Login with Gmail
    </v-btn>
    <v-btn block>
      Login with Github
    </v-btn>
    <v-btn block>
      Login with Twitter
    </v-btn>
    <v-btn block>
      Login with Facebook
    </v-btn>
  </v-form>
        </v-flex>
      </v-layout>
    </v-container>
</v-container>
</template>

<script>
//import {firebaseConfig} from '../util/firebaseConfig'

export default {
  name: 'Login',
  data () {
    return {
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
