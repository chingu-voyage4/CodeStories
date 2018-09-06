<template>
    <div class="content">
        <div class="bg-img">
            <img class="story-cover-photo" :src="story.coverPhotoUrl"/>
        </div>
        <v-container class="text-xs-center">
            <v-container>
                <h1>{{story.storyTitle}}</h1>
                <h3>{{story.author.name}}</h3>
                <v-layout row>
                    <v-flex md2></v-flex>
                    <v-flex md8>
                        <v-divider dark:true></v-divider>
                        <v-layout row mt-3 mb-4>
                            <v-flex xs6  class="text-xs-left">
                                <!--<span class="tags">tag1,tag2,tag3</span>-->
                                <a class = "tags" href="#" v-for="tag in story.tags" :key="tag.id">{{tag}} </a>
                            </v-flex>
                            <v-flex xs6  class="text-xs-right date">
                                {{story.publishAt}}
                            </v-flex>
                        </v-layout>
                        <div class="text-xs-justify" v-html="story.story"></div>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex md2></v-flex>
                    <v-flex md4 class="text-xs-left">
                        <v-btn outline color="green lighten-1"><span class='kudos'>{{story.hearts.length}}</span>&nbsp; Kudos</v-btn>
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
        <div class="comment-wrapper">
            <v-container>
                <v-layout row>
                    <v-flex md2>
                    </v-flex>
                    <v-flex md8 class="text-xs-left">
                        <v-layout row>
                            <v-flex md1>
                                <v-avatar class="grey lighten-4">
                                    <img src="http://via.placeholder.com/30x30" alt="avatar">
                                </v-avatar>
                            </v-flex>
                            <v-flex md2>
                            <h2>fsdkj</h2>
                            </v-flex>
                        </v-layout>
                        <v-text-field
                            name="input-1"
                            label="Comment..."
                            textarea
                        ></v-text-field>
                        <v-btn color="btn-bg" class="btn-style">Submit</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  moduleName,
  FETCH_SINGLE_STORY,
  GET_SINGLE_STORY,
  //   MUTATE_SINGLE_STORY,
  FETCH_SINGLE_STORY_COVERPHOTO
} from "../store/singleStory";

export default {
  layout: "page",
  name: "SingleStory",
  computed: mapGetters({ story: `${moduleName}/${GET_SINGLE_STORY}` }),
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch(
      `${moduleName}/${FETCH_SINGLE_STORY_COVERPHOTO}`,
      this.story.coverPhotoPath
    );
  },
  async asyncData({ route, store }) {
    const { slug } = route.params;
    return store.dispatch(`${moduleName}/${FETCH_SINGLE_STORY}`, slug);
  }
};
</script>

<style scoped>
.bg-img {
  background-image: url("~assets/images/home_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  display: block;
}
.story-cover-photo {
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  display: block;
  width: 100%;
}

h1,
.date,
p,
h2 {
  color: #757575;
}
h3 {
  font-weight: normal;
  color: #95989a;
  padding-bottom: 15px;
}
.tags {
  color: #d9d9d9;
}
.btn-outline-color {
  color: #5fd48a;
}
.kudos {
  font-weight: bold;
  font-size: 16px;
}
.comment-wrapper {
  background: #f1f9f4;
}
.btn-bg {
  background: #5fd48a !important;
}
.btn-style {
  font-weight: bold;
  color: #395f5c;
}
</style>

