<template>
      <v-card class="elevation-2">
        <v-card-media
          :src="story.image"
          height="300px"
        >
        </v-card-media>
        <v-card-title primary-title>
              <span class="headline">Kangaroo Valley Safari</span><v-spacer></v-spacer> <span class="grey--text">Date</span>
        </v-card-title>
          <v-card-text>
            <p class="grey--text">by Author</p>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
          <v-card-actions>
            <v-chip label v-for="tag in story.tags" :key="tag.id">{{tag}}</v-chip>
            <v-spacer></v-spacer>
            <v-btn icon>
                  <v-icon color="grey">favorite_border</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="grey">bookmark_border</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="grey">share</v-icon>
                </v-btn>
              </v-card-actions>
        </v-card-actions>
      </v-card>
</template>

<script>
  export default {
    data: () => ({
      story: {
        image: 'http://via.placeholder.com/200x200',
        tags: ['tag1', 'tag2', 'tag3']
      }
    })
  }
</script>
