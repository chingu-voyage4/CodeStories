<template>
<v-container fluid>
<v-layout>
  <v-flex xs4 v-for="i in 5" :key="i">
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
