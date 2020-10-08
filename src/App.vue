<template>
  <div id="app">
<!--    <router-view/>-->
    <Main_page/>
  </div>
</template>

<script>

import Main_page from "@/components/data_view/main_page";
export default {
  name: 'App',
  components: {Main_page},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
