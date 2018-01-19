<template>
  <v-app>
    <HeaderBar></HeaderBar>
     <v-container class="text-xs-center">
        <h1>{{pageTitle}}</h1>
        <v-form>
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field v-model="searchText" placeholder="SEARCH BY TITLE, AUTHOR OR TAG"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-btn large @click="submit" class="btn-bg btn-style">SEARCH</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
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
      pageTitle: 'Discover More Stories',
      searchText: ''
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
