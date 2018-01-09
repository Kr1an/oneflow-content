<template>
  <div id="app">
    <router-view/>
    <navbar
      :title="title"
      :season="season"
      :onTitleInputChanged="setTitle"
      :onSeasonInputChanged="setSeason"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar,
  },
  computed: mapState([
    'loading',
    'error',
    'episodes',
    'title',
    'season',
  ]),
  methods:{
    setSeason: function(payload) {
      this.$run('setSeason', payload);
      this.$run('loadEpisodes', payload);
    },
    setTitle: function(payload) {
      this.$run('setTitle', payload);
    },
    ...mapActions([
      'loadEpisodes',
    ])
  },
  created: function () {
    this.$run('loadEpisodes', this.$route.query.season)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column-reverse;
}
body {
  margin: 0;
}

</style>
