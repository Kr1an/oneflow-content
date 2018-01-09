<template>
  <div class="container" v-bind:style="{ backgroundImage: `url(${episode.image.medium})` }">
    <div class="title">{{episode.name}}</div>
  </div>
</template>

<script>
export default {
  props: ['episode'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: white;
  background-position: 50% 50%;
  background-size: cover;
  margin: 10px;
  width: 340px;
  height: 200px;
  border: 3px solid black;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
}
div:hover {
  transform: scale(1.08);
}
.title {
  background: rgba(255,255,255,0.3);
  text-shadow: 0.5px 0.5px 0.5px black;
  font-size: 20px;
  padding: 5px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
}
</style>
