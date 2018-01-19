<template>
  <v-app>
    <HeaderBar></HeaderBar>
     <v-container class="text-xs-center">
        <h1>{{pageTitle}}</h1>
     </v-container>
    <StoryGrid />
    <FooterBar></FooterBar>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderBar from '../components/Header/Header.vue'
import FooterBar from '../components/Footer.vue'
import StoryGrid from '../components/StoryGrid.vue'

export default {
  name: 'Stories',
  components: {
    HeaderBar,
    FooterBar,
    StoryGrid
  },
  data () {
    return {
      pageTitle: 'Discover More Stories'
    }
  },
  computed: mapGetters(["user"]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-style {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
}
h1 {
  font-size: 40px;
  padding-top: 153px;
  font-weight: bold;
  color: #757575;
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
  color: #395f5c;
  margin-top: 50px;
}
</style>
