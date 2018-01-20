<template>
 <v-app>
      <v-list class="pa-1">
        <v-list-tile>
            <h3>Advanced Filter</h3>
        </v-list-tile>
      </v-list>
      <v-list class="pt-1" >
        <v-divider></v-divider>
        <v-list-tile>
          <v-subheader v-text="'Sort by'"></v-subheader>
          <v-select
              v-bind:items="sortitems"
              v-model="sortby"
              label="Select"
              single-line
              bottom chips
            ></v-select>
        </v-list-tile>
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
