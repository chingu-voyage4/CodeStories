<template>
  <h1>{{ getMessage }}</h1>
</template>

<script type="text/javascript">
  import { mapMutations, mapGetters } from 'vuex';
  import { CHANGE_MESSAGE } from './test.type';

  export default {
    methods: mapMutations([CHANGE_MESSAGE]),
    computed: mapGetters(['getMessage'])
  };
</script>

<style lang='stylus' scoped>
  @import './test.style.styl'
</style>
