<template>
 <v-app>
      <v-list class="pa-1">
        <v-list-tile>
            <h3>Advanced Filter</h3>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
 </v-app>
</template>

<script>
  export default {
    name: 'FilterDrawer',
  };
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h3 {
  font-size: 22.5px;
  font-weight: normal;
  color: #757575;
}
</style>
