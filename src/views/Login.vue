<template>
<v-container>
    <v-toolbar color="pink">
      <v-toolbar-title class="white--text">Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
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
  </v-form>
        </v-flex>
        <v-flex xs12>
          <v-card color="cyan darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    Login with Gmail
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="purple" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                   Login with Github
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="purple" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                   Login with Twitter
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="purple" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                   Login with Facebook
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
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
