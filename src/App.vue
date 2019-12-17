<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if = "$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  v-if = "!$route.meta.keepAlive"></router-view>
    <!-- <footer-bar></footer-bar> -->
  <router-view name = "footer-bar"></router-view>
  </div>
</template>
<script>
// import FooterBar from "./components/FooterBar";
    export default {
      components:{
        // FooterBar
      }
    }
</script>
<style lang="scss">
.footer-bar {
  display: flex;
  background: #eeeeee;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  &-item {
    flex: 1;
    text-align: center;
  }
}
</style>
