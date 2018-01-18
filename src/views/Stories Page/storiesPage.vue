<template>
    <v-app>
        <div class="content">
            <HeaderBar></HeaderBar>
            <div class="bg-img">
            </div>
            <v-container class="text-xs-center">
                <v-container>
                    <h1>{{storyTitle}}</h1>
                    <h3>{{author}}</h3>
                    <v-layout row>
                        <v-flex md2></v-flex>
                        <v-flex md8>
                            <v-divider dark:true></v-divider>
                            <v-layout row mt-3 mb-4>
                                <v-flex xs6  class="text-xs-left">
                                    <span class="tags">tag1,tag2,tag3</span>
                                </v-flex>
                                <v-flex xs6  class="text-xs-right date">
                                    {{date}}
                                </v-flex>
                            </v-layout>
                            <p class="text-xs-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit convallis ultrices. Nunc elementum lectus eu odio ornare, vitae condimentum elit vehicula. Fusce molestie arcu sed odio elementum faucibus. Praesent dictum ullamcorper efficitur. Ut ac magna vestibulum, gravida quam cursus, aliquet nibh. Proin tempor placerat metus, eu condimentum ex tempor at. Nullam condimentum, ligula in laoreet mollis, ante purus ultrices lacus, non porttitor tortor urna vel diam. Sed consectetur enim non vestibulum aliquet. Nulla aliquam, magna id dignissim semper, massa velit ultricies felis, a iaculis justo nunc aliquet augue. Etiam auctor, urna quis imperdiet gravida, ligula nunc dignissim urna, eget tristique tortor enim vitae lorem. Nunc lacinia, tellus non lobortis volutpat, arcu sapien sagittis erat, in consectetur risus leo vel lacus. Aliquam quis diam tempor, rutrum ipsum in, dignissim nunc. Mauris quis mauris hendrerit, sagittis neque et, tempor lectus. Nunc rhoncus ex quis orci faucibus, id ullamcorper eros fringilla. Curabitur bibendum venenatis eros at suscipit.
                            </p>
                            <p class="text-xs-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit convallis ultrices. Nunc elementum lectus eu odio ornare, vitae condimentum elit vehicula. Fusce molestie arcu sed odio elementum faucibus. Praesent dictum ullamcorper efficitur. Ut ac magna vestibulum, gravida quam cursus, aliquet nibh. Proin tempor placerat metus, eu condimentum ex tempor at. Nullam condimentum, ligula in laoreet mollis, ante purus ultrices lacus, non porttitor tortor urna vel diam. Sed consectetur enim non vestibulum aliquet. Nulla aliquam, magna id dignissim semper, massa velit ultricies felis, a iaculis justo nunc aliquet augue. Etiam auctor, urna quis imperdiet gravida, ligula nunc dignissim urna, eget tristique tortor enim vitae lorem. Nunc lacinia, tellus non lobortis volutpat, arcu sapien sagittis erat, in consectetur risus leo vel lacus. Aliquam quis diam tempor, rutrum ipsum in, dignissim nunc. Mauris quis mauris hendrerit, sagittis neque et, tempor lectus. Nunc rhoncus ex quis orci faucibus, id ullamcorper eros fringilla. Curabitur bibendum venenatis eros at suscipit.
                            </p>
                            <p class="text-xs-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit convallis ultrices. Nunc elementum lectus eu odio ornare, vitae condimentum elit vehicula. Fusce molestie arcu sed odio elementum faucibus. Praesent dictum ullamcorper efficitur. Ut ac magna vestibulum, gravida quam cursus, aliquet nibh. Proin tempor placerat metus, eu condimentum ex tempor at. Nullam condimentum, ligula in laoreet mollis, ante purus ultrices lacus, non porttitor tortor urna vel diam. Sed consectetur enim non vestibulum aliquet. Nulla aliquam, magna id dignissim semper, massa velit ultricies felis, a iaculis justo nunc aliquet augue. Etiam auctor, urna quis imperdiet gravida, ligula nunc dignissim urna, eget tristique tortor enim vitae lorem. Nunc lacinia, tellus non lobortis volutpat, arcu sapien sagittis erat, in consectetur risus leo vel lacus. Aliquam quis diam tempor, rutrum ipsum in, dignissim nunc. Mauris quis mauris hendrerit, sagittis neque et, tempor lectus. Nunc rhoncus ex quis orci faucibus, id ullamcorper eros fringilla. Curabitur bibendum venenatis eros at suscipit.
                            </p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex md2></v-flex>
                        <v-flex md4 class="text-xs-left">
                            <v-btn outline color="green lighten-1"><span class='kudos'>{{kudosCount}}</span>&nbsp; Kudos</v-btn>
                        </v-flex>
                        <v-flex md4 class="text-xs-right">
                            <v-btn flat icon>
                                <v-icon color="green lighten-1">share</v-icon>
                            </v-btn>
                            <v-btn flat icon>
                                <v-icon color="green lighten-1">bookmark_border</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-container>
            <FooterBar></FooterBar>
        </div>
    </v-app>
</template>

<script>
import HeaderBar from '../../components/Header/Header.vue'
import FooterBar from '../../components/Footer.vue'
export default {
  name: 'storyPage',
  components: {
    HeaderBar,
    FooterBar
  },
  data () {
    return {
      storyTitle: 'Loreum Ipsum',
      author: 'Author',
      date:'01 Jan 2018',
      kudosCount: 256
    }
  }
}
</script>

<style scoped>
.bg-img {
  background-image: url('~public/images/home_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  display: block;
}
h1,.date,p{
    color: #757575;
}
h3{
    font-weight: normal;
    color:#95989A;
    padding-bottom: 15px;
}
.tags{
    color: #D9D9D9;
}
.btn-outline-color{
    color: #5FD48A;
}
.kudos{
    font-weight: bold;
    font-size: 16px;
}
</style>

