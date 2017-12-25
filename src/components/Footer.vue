<template>
  <v-footer color="footer-bg" app>
      <v-container>
          <v-layout>
              <v-flex sm2>
                <v-avatar :tile='true'>
                    <img src="~public/images/CHINGU_LOGO-07_crop.png" class="footer-logo" />
                </v-avatar>
              </v-flex>
                <v-flex sm2 v-for='links in footerLinks' :key="links">
                    <v-card flat>
                        <v-card-title class="footer-link">
                            <a href="#">{{links}}</a>
                        </v-card-title>
                    </v-card>
                </v-flex>
          </v-layout>
      </v-container>
      <div class="up-arrow">
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
              "Contact"
          ]
      }
  }
}
</script>

<style scoped>
.footer-bg{
    background: #395F5C;
}
.up-arrow{
    background: #5FD48A;
    width: 120px;
    height: 80px;
    color: #fff;
    text-align: center;
    padding: 25px;
}
.footer-logo{
    width: auto;
}
.footer-link a{
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: Arial;
    font-weight: bold;
}
.footer>:last-child{
    margin-right:0; 
}
</style>


