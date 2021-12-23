<template>
  <div id="app">
    <top />
    <router-view></router-view>
    <bot v-show="this.$route.meta.msg != false"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import top from './components/top'
import bot from './components/Footer'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    top,
    bot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
