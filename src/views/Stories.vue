<template>
  <v-app>
    <HeaderBar></HeaderBar>
     <v-container class="text-xs-center">
        <h1>{{pageTitle}}</h1>
        <v-form>
          <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12 sm10>
              <v-text-field v-model="searchText" placeholder="SEARCH BY TITLE, AUTHOR, TAG"></v-text-field>
            </v-flex>
            <v-flex sm2>
              <v-btn large @click="submit" class="btn-bg btn-style white--text">SEARCH</v-btn>
            </v-flex>
          </v-layout>
          </v-container>
        </v-form>
        <!-- tags -->
     </v-container>
     <v-container>
       <v-layout row  class="tags">
         <v-flex>
           TOP TAGS: <a class="links tag-links pa-1" v-for='top in top_tags'>{{top}} </a>
         </v-flex>
         <v-flex text-xs-right>
           <a class="links pa-2" v-for='category in story_categories'>{{category}} </a>
           <v-btn icon @click.stop="drawer = !drawer">
                <v-icon color="grey">filter_list</v-icon>
            </v-btn>
            <v-navigation-drawer
              temporary
              v-model="drawer"
              absolute
              right
            >
            <filter-drawer />
            </v-navigation-drawer>
         </v-flex>
       </v-layout>
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
import FilterDrawer from '../components/FilterDrawer.vue'

export default {
  name: 'Stories',
  components: {
    HeaderBar,
    FooterBar,
    StoryGrid,
    FilterDrawer
  },
  data () {
    return {
      pageTitle: 'Discover More Stories',
      searchText: '',
      top_tags: ['Origin story', 'Inspiration', 'Life'],
      story_categories: ['HOT', 'NEWEST', 'MOST', 'VIEWED', 'BOOKMARKED'],
      drawer: null,
    }
  },
  computed: mapGetters(["user"]),
  methods: {
    submit () {
      alert('you clicked me! :P')
    }
  }
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
  padding-top: 100px;
  font-weight: bold;
  color: #757575;
}
h3 {
  font-size: 22.5px;
  font-weight: normal;
  color: #757575;
}
.btn-bg {
  background: #5fd48a !important;
}
.btn-style {
  font-weight: bold;
  color: #395f5c;
}
.tags{
  color: #757575;
}
.tag-links {
  text-decoration: underline;
}
.links {
  color: #757575;
  text-transform: uppercase;
}
.links:hover, .links:active {
  color: #5FD48A
}
</style>
