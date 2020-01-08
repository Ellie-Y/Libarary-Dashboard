<template>
<<<<<<< HEAD
  <!-- css文件最外层class是什么（要去掉），这个class类名就得是什么 -->
=======
  
  <!-- Same class name as homepage less file -->
>>>>>>> final
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
<<<<<<< HEAD

  @import "./assets/css/homepage.less";
  @import "./assets/css/add.less";
=======
  
  // Global style files
  @import "./assets/css/homepage.less";
  @import "./assets/css/forms.less";
>>>>>>> final
  
</style>

