<template>
  <v-app>
    <HeaderBar></HeaderBar>
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
</style>
