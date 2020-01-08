<template>
<<<<<<< HEAD
    
  <div class="add-user">
    <img src="../../assets/icons/plus-solid.svg">
    <router-link :to="{name: 'addDetails'}" tag="span"></router-link>
=======
  <!-- Add button Component -->
    
  <div class="add-user" @click="show">
    <img src="../../assets/icons/plus-solid.svg">
>>>>>>> final
  </div>

</template>

<script>
<<<<<<< HEAD

  export default {
    
=======
  import { mapMutations } from 'vuex'
  
  export default {
    methods: {
      ...mapMutations(['showAddForm']),
      show() {
        this.showAddForm(true);
      }
    }
>>>>>>> final
  }

</script>

<style>

</style>