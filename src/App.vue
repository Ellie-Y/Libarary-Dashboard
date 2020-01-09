<template>
  
  <!-- Same class name as homepage less file -->
  <div class="wrapper">
    <NavMenu />
    <div class="content">
      <router-view />
    </div>
  </div>

</template>

<script>

  import NavMenu from './components/NavMenu.vue'

  export default {
    components: {
      NavMenu
    }
  }

</script>

<style lang="less">
  
  // Global style files
  @import "./assets/css/homepage.less";
  @import "./assets/css/forms.less";
  
</style>

