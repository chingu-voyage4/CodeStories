<template>
  <v-footer color="footer-bg" height="auto">
        <img src="~public/images/CHINGU_LOGO-07_crop.png" class="footer-logo" />
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in footerLinks"
          :key="link"
          flat
          class="footer-link"
        >
          {{link}}
        </v-btn>
        <v-spacer></v-spacer>
    <v-btn flat class="up-arrow" @click="$vuetify.goTo(0)">
      <v-icon>arrow_upward</v-icon>
    </v-btn>
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
  margin: 0;
}
.footer-logo {
  height: 50px;
  padding-left: 10px;
}
.footer-link{
  color: #fff;
  font-weight: 400;
}
@media only screen and (max-width: 675px) {
  .footer-link{
    font-size: 1rem;
    margin: 0;
    min-width: auto;
    padding: 0 5px;
  }
  .footer-logo{
    height: 30px;
  }
  .up-arrow{
    height: 50px;
    padding: 10px;
  }
}
</style>


