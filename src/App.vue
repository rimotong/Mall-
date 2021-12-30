<template>
  <div id="app">
    <top />
    <router-view></router-view>
    <bot v-show="this.$route.meta.msg != false"/>
    <el-backtop></el-backtop>
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
  },
  mounted(){
    //派发信息，获取列表信息
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch("getBannerlist")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(241, 241, 241);
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
