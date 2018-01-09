<template>
  <div>
    <input
      v-on:keyup="onSeasonInput"
      placeholder="season"
      :value="season"  />
    <input
      v-on:keyup="onTitleInput"
      placeholder="title"
      :value="title"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onSeasonInput: function(e) {
      this.onSeasonInputChanged(e.target.value);
    },
    onTitleInput: function(e) {
      this.onTitleInputChanged(e.target.value);
    }
  },
  props: {
    title: String,
    season: String,
    onSeasonInputChanged: {
      type: Function,
      required: true
    },
    onTitleInputChanged: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  margin-bottom: 50px;
}
input {
  font-family: monospace;
  border: none;
  outline: none;
  box-shadow: 0;
  transition: 0.3s;
  margin: 10px;
  font-size: 30px;
  text-align: center;
}
input:focus {
  text-align: left;
  font-weight: bold;
  color: black;
  border: none;
  outline: none;
  box-shadow: 0 3px black;
}
</style>
