<template>
  <v-list>
    <v-list-tile>
      <v-avatar size="45px" v-if="user.photoURL && isDrawer">
        <img :src="user.photoURL" />
      </v-avatar>
      Hi, {{ user.displayName }}
    </v-list-tile>
    <v-list-tile @click="goTo('/profile')">
      <v-list-tile-title>
        <v-icon>person</v-icon> Profile
      </v-list-tile-title>
    </v-list-tile>
    <v-list-tile v-if="isDrawer" @click="goTo('/new')">
      <v-list-tile-title>
        <v-icon>message</v-icon> New Post
      </v-list-tile-title>
    </v-list-tile>
    <v-list-tile @click="goTo('/settings')">
      <v-list-tile-title>
        <v-icon>settings</v-icon> Settings
      </v-list-tile-title>
    </v-list-tile>
    <v-list-tile @click="handleSignout">
      <v-list-tile-title>
        <v-icon>exit_to_app</v-icon> Sign out
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
  import { auth } from '../../firebase';

  export default {
    name: 'UserMenu',
    props: ['user', 'isDrawer'],
    methods: {
      handleSignout () {
        auth.signOut();

        // Reload
        window.location.replace(window.location.href);
      },
      goTo (routePath) {
        this.$router.push(routePath);
      }
    }
  };
</script>
