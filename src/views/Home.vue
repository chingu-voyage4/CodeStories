<template>
  <div class="content">
    <HeaderBar></HeaderBar>
    <div class="bg-img">
      <v-container class="text-xs-center">
        <h1>{{title}}</h1>
        <h3>{{subtitle}}</h3>
        <v-btn color="btn-bg" large class="btn-style" depressed>JOIN US!</v-btn>
      </v-container>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/Header.vue'
export default {
  name: 'Home',
  components: {
    HeaderBar
  },
  data () {
    return {
      title: 'Coders of the World',
      subtitle: 'Story snippets from people learning to code around the world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img{
  background-image: url('~public/images/home_bg.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  height: 576px;
  display: block;
}
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