<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6>
        <v-card class="pa-3 green-border green-shadow">
          <v-flex class="text-xs-center">
            <nuxt-link to="/">
              <v-avatar size="125px">
                <img class='logo' src="~assets/images/CHINGU_LOGO-04.png" alt="CodeStories logo" align="middle" />
              </v-avatar>
            </nuxt-link>
            </v-flex>
            <v-btn block outline color="teal" @click="signInWithAuth('google')">
              <v-icon>fa-google</v-icon>&nbsp;Login with Google
            </v-btn>
            <v-btn block outline @click="signInWithAuth('github')">
              <v-icon>fa-github</v-icon>&nbsp;Login with Github
            </v-btn>
            <v-btn block outline color="blue" @click="signInWithAuth('twitter')">
              <v-icon>fa-twitter</v-icon>&nbsp;Login with Twitter
            </v-btn>
          <v-layout row class="mt-4 py-3">
          <v-flex sm5 class="middle-line">
          </v-flex>
          <v-flex sm2 class="text-xs-center">
            OR
          </v-flex>
          <v-flex sm5 class="middle-line">
          </v-flex>
        </v-layout>

         <form @submit.prevent="handleEmailAndPasswordSignIn">
            <span style="color: red;">{{ error.message }}</span>
            <br /><br/>
            <v-text-field
              v-model="user.email"
              label="Your Email"
              type="email"
              placeholder="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              type="password"
              placeholder="Password"
              required
            ></v-text-field>
            <v-btn type="submit" block color="btn-bg" class="btn-style">
              <v-progress-circular indeterminate v-if="loading"></v-progress-circular>&nbsp;
              Login
            </v-btn>
          </form>
          <v-layout row class="mt-4 pa-3 borderTop grey--text">
            <v-flex sm6 class="text-xs-left">
              Forgot Password?
            </v-flex>
            <v-flex sm6 class="text-xs-right">
              <nuxt-link to="/signup">Sign up here</nuxt-link>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import login from "../firebase/login";

export default {
  middleware: "anonymous",
  name: "Login",
  props: ["returnTo"],
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      loading: false,
      error: {
        message: ""
      }
    };
  },
  methods: {
    async handleEmailAndPasswordSignIn() {
      this.loading = true;

      try {
        // Send sign in request
        await login("local", this.user);
        this.loading = false;

        // Redirect to previous location if there is one otherwise to homepage.
        this.$router.push(this.returnTo ? this.returnTo : "/");
      } catch (e) {
        this.loading = false;
        if (e.code) {
          this.error.message = e.message;
        } else {
          this.error.message = "Something went wrong !";
        }
      }
    },
    async signInWithAuth(provider) {
      try {
        const res = await login(provider);
        console.log(res);

        // Redirect to previous location if there is one otherwise to homepage.
        this.$router.push(this.returnTo ? this.returnTo : "/");
      } catch (e) {
        if (e.code) {
          window.alert(e.message);
        } else {
          window.alert("Something went wrong !");
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h3,
.btn-style {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
}
h1 {
  font-size: 65px;
  padding-top: 153px;
  font-weight: bold;
}
h3 {
  font-size: 22.5px;
  font-weight: normal;
}
.btn-bg {
  background: #5fd48a !important;
}
.btn-style {
  font-weight: bold;
  font-size: 1.5em;
}
.green-shadow {
  -webkit-box-shadow: 20px 20px 5px 5px rgba(95, 212, 138, 0.5);
  -moz-box-shadow: 20px 20px 5px 5px rgba(95, 212, 138, 0.5);
  box-shadow: 20px 20px 5px 5px rgba(95, 212, 138, 0.5);
}
.green-border {
  border: 3px solid #5fd48a;
}
.borderTop {
  border-top: 1px solid #95989a;
}
.middle-line {
  border-top: 1px solid #757575;
  margin-top: 10px;
}
</style>
