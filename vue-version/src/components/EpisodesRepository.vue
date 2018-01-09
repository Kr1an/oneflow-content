<template>
  <div>
    <episode v-for="episode in filteredEpisodes" v-bind:episode="episode" v-bind:key="episode.id"/>
  </div>
</template>

<script>
import Episode from './Episode';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'episodes',
      'loading',
      'error',
      'title'
    ]),
    filteredEpisodes: function() {
      return (this.episodes || []).filter(x => x.name.toLowerCase().startsWith((this.title || '').toLowerCase()))
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components: {
    Episode,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
title {

}
</style>
