<template>
<router-link to="/storyPage">
      <v-card class="elevation-2">
        <v-card-media
          :src="story.image"
          height="300px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
              <div class="headline storytitle">{{story.title}}</div>
              <div class="grey--text">
                by {{story.author}}
                <v-spacer></v-spacer>
                {{story.date}}
              </div>
          </div>
        </v-card-title>
          <v-card-text style="text-align:justify">{{story.content}}</v-card-text>
          <v-card-actions>
            <v-chip label v-for="tag in story.tags" :key="tag.id">{{tag}}</v-chip>
            <v-spacer></v-spacer>
            <v-menu bottom>
            <v-btn icon slot="activator">
                <v-icon color="grey">share</v-icon>
            </v-btn>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-title>Share on Facebook</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>Share on Twitter</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-title>Copy URL</v-list-tile-title>
                  </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn icon>
                <v-icon color="grey">bookmark_border</v-icon>
            </v-btn>
          </v-card-actions>
      </v-card>
</router-link>
</template>

<script>
  export default {
    data: () => ({
      story: {
        title: 'Kangaroo Valley Safari',
        author: 'Author',
        date:'01 Jan, 2018',
        content: 'I\'m a thing. But, like most politicians, he promised more than he could deliver. You won\'t have time for sleeping, soldier, not with all the bed making you\'ll be doing. Then we\'ll go with that data file! Hey, you add a one and two zeros to that or we walk! You\'re going to do his laundry? I\'ve got to find a way to escape.',
        image: 'https://images.unsplash.com/photo-1534844978-b859e5a09ad6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4a8317a07ad1f11aec1735bae0cc83b&auto=format&fit=crop&w=667&q=80',
        tags: ['tag1', 'tag2', 'tag3']
      }
    })
  }
</script>

<style scoped>
.storytitle {
  color: #757575;
  font-weight: bold;
}
</style>

