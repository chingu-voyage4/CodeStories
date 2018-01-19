<template>
<v-container grid-list-lg>
<v-layout wrap>
  <v-flex xs4 v-for="i in 6" :key="i">
        <story-card></story-card>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import StoryCard from '../components/StoryCard.vue'

export default {
  name: 'StoryGrid',
  components: {
    StoryCard
  }
}
</script>
