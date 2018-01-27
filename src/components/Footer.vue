<template>
  <v-footer color="footer-bg" app>
    <v-container>
      <v-layout row>
        <v-flex sm2>
          <v-avatar :tile='true'>
            <img src="~public/images/CHINGU_LOGO-07_crop.png" class="footer-logo" />
          </v-avatar>
        </v-flex>
        <!-- <v-spacer></v-spacer> -->
        <v-flex sm2 v-for='links in footerLinks' :key="links">
          <div class="footer-link text-md-center">
            <a href="#">{{links}}</a>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="up-arrow" @click="scrollToTop">
      <i class="material-icons">arrow_upward</i>
    </div>
  </v-footer>
</template>

<script>
export default {
  data (){
      return {
          footerLinks:[
              "About",
              "Privacy",
              "Team",
              "Contact",
              'repo'
          ]
      }
  },
  methods: {
    scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>

<style scoped>
.footer-bg {
  background: #395f5c;
}
.up-arrow {
  background: #5fd48a;
  max-width: 100px;
  height: 80px;
  color: #fff;
  text-align: center;
  padding: 25px;
}
.footer-logo {
  width: auto;
}
.footer-link a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-family: Arial;
}
.footer > :last-child {
  margin-right: 0;
}
</style>


