<template>
  <div class="content">
    <div class="bg-img">
      <v-container class="text-xs-center">
        <h1>{{title}}</h1>
        <h3>{{subtitle}}</h3>
        <router-link to="/signup" v-if="!user">
          <v-btn color="btn-bg" large class="btn-style" depressed> JOIN US! </v-btn>
        </router-link>
        <router-link to="/stories" v-else>
          <v-btn color="btn-bg" large class="btn-style" depressed> DISCOVER STORIES! </v-btn>
        </router-link>
      </v-container>
    </div>
    <div class="neg-margin-top">
    <story-grid />
    </div>
    <v-flex class="text-xs-center mb-5">
    <router-link to="/stories">
        <v-btn color="btn-bg" large class="btn-style" depressed> DISCOVER MORE </v-btn>
        </router-link>
    </v-flex>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StoryGrid from '../components/StoryGrid.vue'

export default {
  middleware: "anonymous",
  name: 'Home',
  layout: 'page',
  components: {
    StoryGrid
  },
  data () {
    return {
      title: 'Coders of the World',
      subtitle: 'Story snippets from people learning to code around the world'
    }
  },
  computed: mapGetters(["user"]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img {
  background-image: url('~assets/images/home_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 576px;
  display: block;
}
h1,
h3,
.btn-style {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  color: #395f5c;
  margin-top: 50px;
}
.neg-margin-top {
  margin-top: -10%;
}
</style>
