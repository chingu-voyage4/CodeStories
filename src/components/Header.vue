<template>
  <v-layout row>
    <v-navigation-drawer temporary absolute dark class="green darken-4" v-model="drawer" left app>
      <v-list dense>
        <router-link to="/register">
           <v-list-tile>
              <v-list-tile-action>
                <v-icon>group_add</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                  <v-list-tile-title>signup</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
          <router-link to="/login">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>login</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar prominent app color="header-bg" class="header-content" height="75px">
      <v-toolbar-side-icon light class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-flex sm4>
        <v-toolbar-title>Discover Stories</v-toolbar-title>
      </v-flex>
      <v-flex sm4 class="text-xs-center hidden-sm-and-down">
        <v-avatar size="125px">
          <img class='logo' src="~public/images/CHINGU_LOGO-04.png" alt="CodeStories logo" align="middle" />
        </v-avatar>
      </v-flex>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-toolbar-title v-if="user">
          <v-avatar size="60px">
            <img :src="user.photoURL" />
          </v-avatar>
          {{ user.displayName }}
        </v-toolbar-title>
        <div v-else>
          <router-link to="/login">
            <v-btn class="buttons" flat large left>Login</v-btn>
          </router-link>
          <router-link to="/register">
            <v-btn class="buttons" flat large left>Join</v-btn>
          </router-link>
        </div>
        </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: mapGetters(['user'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-bg {
  background: #395f5c;
}
.header-content {
  color: #5fd48a;
  text-transform: uppercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.logo {
  margin-top: 75px;
}
.buttons {
  color: #5fd48a !important;
}
</style>
