<template>
  <div>
    <v-navigation-drawer temporary absolute light class="green lighten-4" v-model="drawer" left app>
      <v-list dense v-if="!user">
        <v-list-tile @click="goTo('/login')">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="goTo('/register')">
          <v-list-tile-action>
            <v-icon>group_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title>Join</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <UserMenu v-else :user="user" isDrawer="true"></UserMenu>
    </v-navigation-drawer>
    <v-toolbar prominent app color="header-bg" class="header-content" height="75px">
      <!-- The menu button -->
      <v-toolbar-side-icon light class="hidden-md-and-up buttons" @click.stop="drawer = !drawer"></v-toolbar-side-icon>      
      <v-toolbar-title class="hidden-sm-and-down">
        <v-btn flat to="/stories" style="background-color:transparent" large class="buttons"
          Discover Stories
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-up">
        <v-btn flat to="/" style="color:transparent">
          <img class="logo" src="~public/images/CHINGU_LOGO-07_crop.png" alt="CodeStories logo" align="middle" />
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <router-link to="/">     
        <v-btn icon>
          <v-avatar size="125px" class="hidden-sm-and-down">
            <img src="~public/images/CHINGU_LOGO-04.png" alt="CodeStories logo" align="middle" />
          </v-avatar>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-if="user">
        <v-btn class="buttons" @click="handleEdit" flat v-if="singleStory.onSinglePage">
          <v-icon>edit</v-icon> &nbsp;Edit
        </v-btn>
        <v-btn class="buttons" flat to="/new">
          <v-icon>message</v-icon> &nbsp;New story
        </v-btn>
        <v-menu bottom left offset-y>
          <v-avatar class="profile" size="45px" slot="activator" v-if="user.photoURL">
            <img :src="user.photoURL" />
          </v-avatar>
          <div v-else slot="activator">
            <v-icon class="buttons profile" large>person</v-icon>
          </div>
          <UserMenu :user="user"></UserMenu>
        </v-menu>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down" v-else>          
          <v-btn class="buttons" flat to="/login">Login</v-btn>
          <v-btn class="buttons" flat to="/register">Join</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserMenu from './UserMenu.vue';

export default {
  data() {
    return {
      drawer: false
    };
  },
  components: {
    UserMenu
  },
  computed: mapGetters({
    user: 'user',
    singleStory: 'GET_SINGLE_STORY'
  }),

  methods: {
    goTo (routePath) {
      this.$router.push(routePath);
    },
    getStoryEditPath () {
      return `/edit/${this.singleStory.slug}`;
    },
    handleEdit () {
      // Change flag so that edit button won't be shown on other route/page.
      this.$store.commit('MUTATE_SINGLE_STORY', { key: 'onSinglePage', val: false });
      this.goTo(this.getStoryEditPath());
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-bg {
  background: #395f5c;
}
.header-content {
  color: #5fd48a;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.logo {
  height: 50px;
}
.buttons {
  color: #5fd48a !important;
}
.profile {
  margin-top: 16px;
  border-radius: 50%;
}
</style>
