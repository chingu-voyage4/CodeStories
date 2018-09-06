<template>
 <v-container>
      <v-list class="pa-1">
        <v-list-tile>
            <h3>Advanced Filter</h3>
        </v-list-tile>
      </v-list>
      <v-list class="pt-1" >
        <v-divider></v-divider>
      </v-list>
      <v-flex>
      <h4 class="text-xs-left pt-2">Sort by: </h4>
      </v-flex>
      <v-flex>
      <v-select
              v-bind:items="sortitems"
              v-model="sortby"
              label="Select"
              single-line
              bottom chips
            ></v-select>
      </v-flex>
      <v-flex>
      <h4 class="text-xs-left">Top Filters:</h4>
      </v-flex>
      <v-flex class="pt-3 pb-3">
          <v-expansion-panel expand>
            <v-expansion-panel-content>
              <div slot="header">Top Categories</div>
              <v-container class="pr-4 pl-4">
                <v-flex v-for="category in topCategories" :key="category.id">
                  <input class="pa-2" type="checkbox" :id="category.value" :value="category.value" v-model="checkedCategories">
                  <label class="pa-2" :for="category.value">{{category.value}} ({{category.count}})</label>
                </v-flex>
              </v-container>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header">Top Tags</div>
              <v-container class="pr-4 pl-4">
                <v-flex v-for="tag in topTags" :key="tag.id">
                  <input class="pa-2" type="checkbox" :id="tag.value" :value="tag.value" v-model="checkedTag">
                  <label class="pa-2" :for="tag.value">{{tag.value}} ({{tag.count}})</label>
                </v-flex>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-flex>
        <h4 class="text-xs-left">Other tags: </h4>
        <v-text-field
              placeholder="Start typing for suggestions!"
            >
        </v-text-field>
        <v-chip close v-for="tag in tags" :key="tag" outline color="green">{{tag}}</v-chip>

        <v-btn block outline color="green">SORT & FILTER</v-btn>
 </v-container>
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
          {text: 'Tag'},
          {text: 'Time'}
        ],
        tags: ['Motivation', 'Learning', 'Interview'],
        topCategories: [
          {
            value: 'Learning',
            count: 500
          },
          {
            value: 'Professional Life',
            count: 250
          },
          {
            value: 'Life',
            count: 300
          }
        ],
        checkedCategories: [],
        topTags: [
          {
            value: 'Origin Story',
            count: 500
          },
          {
            value: 'Teamwork',
            count: 250
          },
          {
            value: 'Inspiration',
            count: 300
          },
          {
            value: 'Job Hunting',
            count: 1000
          }
        ],
        checkedTags: []
      }
    }
  }
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
