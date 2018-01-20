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
        <v-list-tile>
          <h5>Top Filters:</h5>
          <v-expansion-panel expand>
            <v-expansion-panel-content>
              <div slot="header">Top Categories</div>
              <p>Checkboxes</p>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Top Tags</div>
              <p>Checkboxes</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-list-tile>
      </v-list>
 </v-app>
</template>

<script>
  export default {
    name: 'FilterDrawer',
    data () {
      return {
        sortby: null,
        sortitems: [
          {text: 'Author'},
          {text: 'Title'},
          {text: 'Tag'}
          ]
      }
    }
  };
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #757575;
}
h3 {
  font-size: 22.5px;
  font-weight: normal;
}
</style>
